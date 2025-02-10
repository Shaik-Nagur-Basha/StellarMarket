// components/RealAIChatbot.js
import React, { useState } from 'react';

function RealAIChatbot() {
  const [chatLog, setChatLog] = useState([
    { sender: 'bot', message: 'Hello, I am your real AI chatbot. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { sender: 'user', message: input };
    setChatLog([...chatLog, userMessage]);
    setInput('');
    setLoading(true);
    try {
      // Simulated API call – replace URL with your real AI endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      // Use dummy text as AI response
      const botResponse = { sender: 'bot', message: 'This is a simulated AI response based on your query.' };
      setChatLog(prev => [...prev, botResponse]);
    } catch (error) {
      const errorMessage = { sender: 'bot', message: 'Sorry, an error occurred processing your request.' };
      setChatLog(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Real AI Chatbot</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl flex flex-col">
        <div className="p-4 flex-1 overflow-y-auto">
          {chatLog.map((entry, index) => (
            <div key={index} className={`mb-2 ${entry.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded ${entry.sender === 'user' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
                {entry.message}
              </span>
            </div>
          ))}
          {loading && <p className="text-center text-gray-500">Loading response...</p>}
        </div>
        <form onSubmit={handleSend} className="p-4 border-t">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Type your message..."
          />
        </form>
      </div>
    </div>
  );
}

export default RealAIChatbot;
