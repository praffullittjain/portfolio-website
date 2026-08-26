import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import CaseStudyDTL from "./pages/CaseStudyDTL";
import BlogClaudeCodeWorkflow from "./pages/BlogClaudeCodeWorkflow";
import BlogVulnerableUsers from "./pages/BlogVulnerableUsers";
import BlogBuildingOwnTime from "./pages/BlogBuildingOwnTime";

function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/dtl" element={<CaseStudyDTL />} />
          <Route
            path="/blog/claude-code-workflow"
            element={<BlogClaudeCodeWorkflow />}
          />
          <Route
            path="/blog/vulnerable-users"
            element={<BlogVulnerableUsers />}
          />
          <Route
            path="/blog/building-own-time"
            element={<BlogBuildingOwnTime />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
