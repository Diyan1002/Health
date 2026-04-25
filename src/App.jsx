import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ======================
// 🔷 LAYOUT COMPONENTS
// ======================
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
// ======================
// 🔷 HOME PAGE SECTIONS
// ======================
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Aimcards from "./Components/Aimcards";
import Call from "./Components/Call";
import LatestPublications from "./Components/LatestPublications";
import Indexing from "./Components/Indexing";

// NEW PREMIUM SECTIONS (ADDED)
// import StatsSection from "./Components/StatsSection";
// import ResearchSection from "./Components/ResearchSection";
// import AboutJournal from "./Components/AboutJournal";
import TopBar from "./Components/TopBar";
// import JournalScope from "./Components/JournalScope";
import ResearchGallery from "./Components/ResearchGallery";
import SubmissionFlow from "./Components/SubmissionFlow";
import WhyPublish from "./Components/WhyPublish";
import Newsletter from "./Components/Newsletter";

// import CallForPapers from "./Components/CallForPapers";
// import JournalMetrics from "./Components/JournalMetrics";


// ======================
// 🔷 PAGES
// ======================
import About from "./Pages/About";
import Scope from "./Pages/Scope";
import Guidelines from "./Pages/Guidelines";
import Board from "./Pages/Board";
import Submit from "./Pages/Submit";
import ArticleDetail from "./Pages/ArticleDetail";
// ======================
// 🔷 HOME COMPONENT
// ======================
const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      

      {/* TOP ANNOUNCEMENT */}
      <TopBar />
        
      {/* JOURNAL METRICS */}
      {/* <JournalMetrics /> */}

      {/* FEATURES */}
      <Features />
       <ResearchGallery />
      {/* AIM CARDS */}
      <Aimcards />

      {/* STATS */}
      {/* <StatsSection /> */}

      {/* CALL FOR PAPERS */}
      {/* <CallForPapers /> */}

      {/* RESEARCH SECTION */}
      {/* <ResearchSection /> */}

      {/* ABOUT JOURNAL */}
      {/* <AboutJournal /> */}

      {/* SCOPE */}
      {/* <JournalScope /> */}

      {/* PUBLICATION WORKFLOW */}
      <SubmissionFlow />

      {/* WHY PUBLISH */}
      <WhyPublish />

      {/* LATEST PUBLICATIONS */}
      <LatestPublications />

      {/* INDEXING */}
      <Indexing />

      {/* NEWSLETTER */}
      <Newsletter />

      {/* FINAL CALL */}
      <Call />
    </>
  );
};

// ======================
// 🔷 MAIN APP ROUTER
// ======================
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* HEADER */}
      <Header />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/editorial-board" element={<Board />} />
        <Route path="/submit-paper" element={<Submit />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </Router>
  );
};

export default App;