// components/ChatWidget.js
import React, { useState } from 'react';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setChatLog([...chatLog, { text: message, sender: 'user' }]);
      // Dummy response from chat bot
      setChatLog((prev) => [...prev, { text: "Thanks for reaching out! We'll get back to you soon.", sender: 'bot' }]);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <span>Live Chat</span>
            <button onClick={toggleChat} className="text-xl">&times;</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {chatLog.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <p className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              required
            />
          </form>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300"
        >
          Chat
        </button>
      )}
    </div>
  );
}

export default ChatWidget;
