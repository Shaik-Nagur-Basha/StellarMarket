import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeepSeek from "./components/DeepSeek/DeepSeek";
import DeepSeek1 from "./components/DeepSeek/DeepSeek1";
import DeepSeek2 from "./components/DeepSeek/DeepSeek2";
import ChatGpt from "./components/ChatGpt/ChatGpt";
import Grok from "./components/Grok/Grok";
import Home from "./components/Home";
import GitHubCopilot from "./components/GitHubCopilotAgentMode/GitHubCopilot";
import MicrosoftCopilot from "./components/Copilot/MicrosoftCopilot";
import DeepSeek3 from "./components/DeepSeek/DeepSeek3";
import ChatGpt1 from "./components/ChatGpt/ChatGpt1";
import MicrosoftCopilot1 from "./components/Copilot/MicrosoftCopilot1";
import GitHubCopilot1 from "./components/GitHubCopilotAgentMode/GitHubCopilot1";
import GitHubCopilot2 from "./components/GitHubCopilotAgentMode/GitHubCopilot2";
import GC3SignUpPage from "./components/GitHubCopilotAgentMode/GC3SignUpPage";
import GC3SignInPage from "./components/GitHubCopilotAgentMode/GC3SignInPage";
import ErrorPage from "./components/ErrorPage";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio/Portfolio";
import Portfolio1 from "./components/Portfolio/Portfolio1";
import Portfolio2 from "./components/Portfolio/Portfolio2";
import ChatDashboard from "./components/ChatDashboard/ChatDashboard";
import ChatDashboard1 from "./components/ChatDashboard/ChatDashboard1";
import ExpenseDashboard from "./components/ExpenseDashboard/ExpenseDashboard";

export default function App() {
  const contentArray = [
    { title: "ErrorPage", type: "video", madeBy: "Agent Mode With C 3.5 S" },
    { title: "ExpenseDashboard", type: "video", madeBy: "DeepSeek" },
    { title: "GC3SignUpPage", type: "video", madeBy: "GC3SignUpPage" },
    { title: "GC3SignInPage", type: "video", madeBy: "GC3SignInPage" },
    { title: "GitHubCopilot2", type: "video", madeBy: "GitHubCopilot2" },
    { title: "DeepSeek2", type: "image", madeBy: "DeepSeek2" },
    { title: "DeepSeek3", type: "video", madeBy: "DeepSeek3" },
    { title: "DeepSeek", type: "image", madeBy: "DeepSeek" },
    { title: "DeepSeek1", type: "image", madeBy: "DeepSeek1" },
    { title: "GitHubCopilot1", type: "video", madeBy: "GitHubCopilot1" },
    { title: "Portfolio", type: "video", madeBy: "Agent Mode With C 3.5 S" },
    { title: "Portfolio1", type: "video", madeBy: "ChatGPT" },
    { title: "Portfolio2", type: "video", madeBy: "ChatGPT" },
    { title: "ChatGpt1", type: "video", madeBy: "ChatGpt1" },
    { title: "MicrosoftCopilot1", type: "image", madeBy: "MicrosoftCopilot1" },
    { title: "MicrosoftCopilot", type: "image", madeBy: "MicrosoftCopilot" },
    { title: "ChatGpt", type: "image", madeBy: "ChatGpt" },
    { title: "GitHubCopilot", type: "image", madeBy: "GitHubCopilot" },
    { title: "Grok", type: "image", madeBy: "Grok" },
    { title: "ChatDashboard1", type: "image", madeBy: "ChatGPT" },
    { title: "ChatDashboard", type: "image", madeBy: "ChatGPT" },
  ];

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home contentArray={contentArray} />} />
        <Route path="/MicrosoftCopilot" element={<MicrosoftCopilot />} />
        <Route path="/MicrosoftCopilot1" element={<MicrosoftCopilot1 />} />
        <Route path="/ChatGpt" element={<ChatGpt />} />
        <Route path="/ChatGpt1" element={<ChatGpt1 />} />
        <Route path="/DeepSeek" element={<DeepSeek />} />
        <Route path="/DeepSeek1" element={<DeepSeek1 />} />
        <Route path="/DeepSeek2" element={<DeepSeek2 />} />
        <Route path="/DeepSeek3" element={<DeepSeek3 />} />
        <Route path="/GitHubCopilot" element={<GitHubCopilot />} />
        <Route path="/GitHubCopilot1" element={<GitHubCopilot1 />} />
        <Route path="/GitHubCopilot2" element={<GitHubCopilot2 />} />
        <Route path="/GC3SignUpPage" element={<GC3SignUpPage />} />
        <Route path="/GC3SignInPage" element={<GC3SignInPage />} />
        <Route path="/Grok" element={<Grok />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Portfolio1" element={<Portfolio1 />} />
        <Route path="/Portfolio2" element={<Portfolio2 />} />
        <Route path="/ChatDashboard" element={<ChatDashboard />} />
        <Route path="/ChatDashboard1" element={<ChatDashboard1 />} />
        <Route path="/ExpenseDashboard" element={<ExpenseDashboard />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />

        {/* Error page - catches all undefined routes */}
        <Route
          path="*"
          element={<ErrorPage code="404" message="Page not found" />}
        />
      </Routes>
    </Router>
  );
}
