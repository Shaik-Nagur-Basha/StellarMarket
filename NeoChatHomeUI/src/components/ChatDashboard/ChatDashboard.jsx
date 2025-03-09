import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';

const ChatDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState('');
  const messageInputRef = useRef(null);

  useEffect(() => {
    // Apply saved theme on load
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    // Auto-resize textarea
    const messageInput = messageInputRef.current;
    if (messageInput) {
      messageInput.style.height = 'auto';
      messageInput.style.height = messageInput.scrollHeight + 'px';
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    // Auto-resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending:', message.trim());
      setMessage('');
      if (messageInputRef.current) {
        messageInputRef.current.style.height = 'auto';
      }
    }
  };

  return (
    <div className="h-full">
      <Helmet>
        <title>Modern Chat Dashboard</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <style>
          {`
            .sent-bubble {
              @apply bg-[#DCF8C6] rounded-tr-none;
            }
            .received-bubble {
              @apply bg-[#E5E5E5] rounded-tl-none;
            }
            .dark .sent-bubble {
              @apply bg-[#1E88E5];
            }
            .dark .received-bubble {
              @apply bg-[#455A64] text-white;
            }
          `}
        </style>
      </Helmet>

      <div className="h-full bg-gray-100 dark:bg-[#212121] transition-colors">
        <div className="flex h-screen">
          {/* Conversation Sidebar */}
          <div className="w-[350px] bg-white dark:bg-[#121212] border-r border-gray-200 dark:border-gray-800">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
                <i className="fas fa-search text-gray-400 mr-2"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none w-full text-gray-700 dark:text-gray-300"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="overflow-y-auto h-[calc(100vh-120px)]">
              {/* Conversation Item */}
              <div className="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold dark:text-white">John Doe</h3>
                    <span className="text-xs text-gray-500">10:30 AM</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">Hey, how are you?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="h-[70px] flex items-center px-6 border-b border-gray-200 dark:border-gray-800">
              <img 
                src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                alt="Profile" 
                className="w-8 h-8 rounded-full mr-4"
              />
              <div>
                <h2 className="font-bold dark:text-white">Jane Smith</h2>
                <p className="text-sm text-gray-500">Online</p>
              </div>
              <div className="ml-auto flex gap-4">
                <button 
                  onClick={toggleDarkMode}
                  className="text-gray-600 dark:text-gray-300"
                >
                  <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
                <i className="fas fa-phone-alt text-gray-600 dark:text-gray-300 cursor-pointer"></i>
                <i className="fas fa-video text-gray-600 dark:text-gray-300 cursor-pointer"></i>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-6 bg-[#F5F5F5] dark:bg-[#121212]">
              {/* Received Message */}
              <div className="flex mb-4">
                <div className="received-bubble max-w-[70%] p-3 rounded-2xl">
                  <p className="dark:text-white">Hi! Let's discuss the project</p>
                  <span className="text-xs text-gray-500 mt-1 block">10:30 AM</span>
                </div>
              </div>

              {/* Sent Message */}
              <div className="flex mb-4 justify-end">
                <div className="sent-bubble max-w-[70%] p-3 rounded-2xl">
                  <p>Sounds good! I'll share the files</p>
                  <span className="text-xs text-gray-500 mt-1 block">10:31 AM ✓✓</span>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <button className="text-gray-500 dark:text-gray-300">
                  <i className="fas fa-paperclip"></i>
                </button>
                <button className="text-gray-500 dark:text-gray-300">
                  <i className="fas fa-face-smile"></i>
                </button>
                <div className="flex-1 relative">
                  <textarea
                    ref={messageInputRef}
                    value={message}
                    onChange={handleMessageChange}
                    rows="1"
                    placeholder="Type a message"
                    className="w-full resize-none bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2 outline-none text-gray-700 dark:text-gray-300"
                  />
                </div>
                {message.trim() && (
                  <button 
                    onClick={handleSendMessage}
                    className="text-blue-500"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDashboard;