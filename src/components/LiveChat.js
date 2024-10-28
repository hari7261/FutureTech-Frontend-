// src/components/LiveChat.js
import React from 'react';

const LiveChat = () => {
  const handleChatOpen = () => {
    // Logic to open the chat interface
    alert("Chat window opened!"); // Placeholder for chat functionality
  };

  return (
    <button 
      onClick={handleChatOpen}
      className="fixed bottom-4 right-4 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
    >
      💬
    </button>
  );
};

export default LiveChat;
