const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Submission = require("./models/Submission");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

if (!MONGO_URI) {
  console.error("MONGO_URI missing in .env file");
  process.exit(1);
}

if (!ADMIN_PASSWORD) {
  console.error("ADMIN_PASSWORD missing in .env file");
  process.exit(1);
}

app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use("/uploads", express.static(uploadDir));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const safeName = file.originalname.replace(/\s+/g, "-");
    cb(null, Date.now() + "-" + safeName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, DOC, and DOCX files are allowed."));
    }
  },
});

const checkAdmin = (req, res, next) => {
  const password = req.headers["x-admin-password"];

  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({
      message: "Unauthorized admin access",
    });
  }

  next();
};

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Journal backend is running successfully",
  });
});

app.post("/api/submissions", upload.single("paperFile"), async (req, res) => {
  try {
    const { authorName, email, phone, paperTitle, paperCategory, abstract } =
      req.body;

    if (!authorName || !email || !paperTitle) {
      return res.status(400).json({
        message: "Author name, email, and paper title are required.",
      });
    }

    const submission = await Submission.create({
      authorName,
      email,
      phone,
      paperTitle,
      paperCategory,
      abstract,
      fileName: req.file ? req.file.originalname : "",
      fileUrl: req.file ? `/uploads/${req.file.filename}` : "",
    });

    res.status(201).json({
      message: "Paper submitted successfully.",
      submission,
    });
  } catch (error) {
    res.status(500).json({
      message: "Submission failed.",
      error: error.message,
    });
  }
});

app.get("/api/admin/submissions", checkAdmin, async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 });

    res.status(200).json({
      total: submissions.length,
      submissions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch submissions.",
      error: error.message,
    });
  }
});

app.patch("/api/admin/submissions/:id/status", checkAdmin, async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = ["Pending", "Accepted", "Rejected", "Under Review"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid status.",
      });
    }

    const submission = await Submission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!submission) {
      return res.status(404).json({
        message: "Submission not found.",
      });
    }

    res.status(200).json({
      message: "Status updated successfully.",
      submission,
    });
  } catch (error) {
    res.status(500).json({
      message: "Status update failed.",
      error: error.message,
    });
  }
});

app.delete("/api/admin/submissions/:id", checkAdmin, async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);

    if (!submission) {
      return res.status(404).json({
        message: "Submission not found.",
      });
    }

    if (submission.fileUrl) {
      const fileName = path.basename(submission.fileUrl);
      const filePath = path.join(uploadDir, fileName);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Submission.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Submission deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed.",
      error: error.message,
    });
  }
});

app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message || "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});