import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ByDeepSeek from "./components/DeepSeek/ByDeepSeek";
import ByDeepSeek1 from "./components/DeepSeek/ByDeepSeek1";
import ByDeepSeek2 from "./components/DeepSeek/ByDeepSeek2";
import ByChatGpt from "./components/ChatGpt/ByChatGpt";
import ByGrok from "./components/Grok/ByGrok";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deepseek" element={<ByDeepSeek />} />
        <Route path="/deepseek1" element={<ByDeepSeek1 />} />
        <Route path="/deepseek2" element={<ByDeepSeek2 />} />
        <Route path="/chatgpt" element={<ByChatGpt />} />
        <Route path="/grok" element={<ByGrok />} />
      </Routes>
    </Router>
  );
}