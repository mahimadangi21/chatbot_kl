import React from 'react';
import './ChatBot.css';

const ChatBot = () => {
  return (
    <div className="chatbot-container">
      <div className="chatbot-card">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/a6DQk_CddjATUCch6mihc"
          className="chat-iframe"
          frameBorder="0"
          title="Chatbase AI Assistant"
        ></iframe>
      </div>
    </div>
  );
};

export default ChatBot;

