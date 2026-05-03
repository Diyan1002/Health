const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    paperTitle: {
      type: String,
      required: true,
      trim: true,
    },
    paperCategory: {
      type: String,
      trim: true,
    },
    abstract: {
      type: String,
      trim: true,
    },
    fileName: {
      type: String,
    },
    fileUrl: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected", "Under Review"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Submission", submissionSchema);