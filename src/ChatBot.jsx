import React from 'react';
import './ChatBot.css';

const ChatBot = () => {
  // Use a unique session ID to ensure a fresh chat every load
  const sessionUrl = `https://www.chatbase.co/chatbot-iframe/a6DQk_CddjATUCch6mihc?session_id=${Date.now()}`;

  return (
    <div className="chatbot-container">
      <div className="chatbot-card">
        <iframe
          src={sessionUrl}
          className="chat-iframe"
          frameBorder="0"
          title="Chatbase AI Assistant"
        ></iframe>
      </div>
    </div>
  );
};

export default ChatBot;

