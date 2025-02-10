// components/AdvancedChatbot.js
import React, { useState } from "react";

export default function AdvancedChatbot() {
  const [chatLog, setChatLog] = useState([
    { sender: "bot", message: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    const userMessage = { sender: "user", message: input };
    setChatLog([...chatLog, userMessage]);
    setInput("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        message: "I'm here to assist you with any questions you have!",
      };
      setChatLog((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Chat with Support</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl flex flex-col">
        <div className="p-4 flex-1 overflow-y-auto">
          {chatLog.map((entry, index) => (
            <div
              key={index}
              className={`mb-2 ${
                entry.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block p-2 rounded ${
                  entry.sender === "user"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {entry.message}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="p-4 border-t">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
        </form>
      </div>
    </div>
  );
}

//AdvancedChatbot;
