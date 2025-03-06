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

export default function App() {
  const content = [
    "MicrosoftCopilot",
    "MicrosoftCopilot1",
    "ChatGpt",
    "ChatGpt1",
    "DeepSeek",
    "DeepSeek1",
    "DeepSeek2",
    "DeepSeek3",
    "GitHubCopilot",
    "GitHubCopilot1",
    "GitHubCopilot2",
    "GC3SignUpPage",
    "GC3SignInPage",
    "Grok",
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home content={content} />} />
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
      </Routes>
    </Router>
  );
}
