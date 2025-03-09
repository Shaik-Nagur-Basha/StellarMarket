import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

const ChatDashboard1 = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, how are you?",
      time: "10:45 AM",
      type: "received",
    },
    {
      id: 2,
      text: "I'm good, thanks! How about you?",
      time: "10:46 AM",
      type: "sent",
    },
  ]);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    // Dark mode based on system preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");
    
    if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Scroll to bottom of messages
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        text: message.trim(),
        time: "Now",
        type: "sent",
      },
    ]);
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Helmet>
        <title>Modern Chat Dashboard</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <style>
          {`
            .transition-transform {
              transition: transform 0.3s ease;
            }
            .fade-in {
              animation: fadeIn 0.2s ease-in;
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}
        </style>
      </Helmet>

      {/* Main container */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Search bar */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none"
              aria-label="Search conversations"
            />
          </div>

          {/* Conversations list */}
          <ul className="flex-1 overflow-y-auto">
            <li className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer flex items-center border-b border-gray-200 dark:border-gray-700">
              <img
                src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                alt="John Doe"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold">John Doe</h4>
                  <span className="text-xs text-gray-500">10:45 AM</span>
                </div>
                <p className="text-sm text-gray-500 truncate">
                  Last message preview goes here...
                </p>
              </div>
            </li>
          </ul>

          {/* User Profile & Settings */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="My Profile"
                className="w-10 h-10 rounded-full mr-2"
              />
              <span className="font-semibold">My Profile</span>
            </div>
            <button
              className="text-gray-600 dark:text-gray-300"
              aria-label="Settings"
            >
              <i className="fas fa-cog"></i>
            </button>
          </div>
        </aside>

        {/* Chat Area */}
        <main className="flex flex-col flex-1">
          {/* Header */}
          <header className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <img
              src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
              alt="Contact Profile"
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="flex-1">
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-xs text-gray-500">Online</p>
            </div>
            <div className="flex space-x-4">
              <button
                className="text-gray-600 dark:text-gray-300"
                aria-label="Voice Call"
              >
                <i className="fas fa-phone"></i>
              </button>
              <button
                className="text-gray-600 dark:text-gray-300"
                aria-label="Video Call"
              >
                <i className="fas fa-video"></i>
              </button>
              <button
                className="text-gray-600 dark:text-gray-300"
                aria-label="More Options"
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </header>

          {/* Message List */}
          <div
            ref={chatMessagesRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {messages.map((msg) => (
              msg.type === 'received' ? (
                <div key={msg.id} className="flex items-start fade-in">
                  <img
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    alt="Contact"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg shadow">
                      <p>{msg.text}</p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block">{msg.time}</span>
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flex items-end justify-end fade-in">
                  <div>
                    <div className="bg-blue-500 text-white p-3 rounded-lg shadow">
                      <p>{msg.text}</p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block text-right">
                      {msg.time}
                    </span>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <button
                className="text-gray-600 dark:text-gray-300 mr-2"
                aria-label="Emoji"
              >
                <i className="far fa-smile"></i>
              </button>
              <button
                className="text-gray-600 dark:text-gray-300 mr-2"
                aria-label="Attach File"
              >
                <i className="fas fa-paperclip"></i>
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message"
                className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none"
                aria-label="Type a message"
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 bg-green-500 hover:bg-green-600 text-white rounded-full p-2"
                aria-label="Send Message"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatDashboard1;