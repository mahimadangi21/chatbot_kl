import React from 'react'
import ChatBot from './ChatBot'
import './App.css'

function App() {
  return (
    <div className="app-main">
      <nav className="top-nav">
        <div className="logo">
          <div className="logo-icon">AI</div>
          <span>ChatBot KL</span>
        </div>
        <div className="nav-links">
          <a href="#" className="active">Assistant</a>
          <a href="#">Knowledge Base</a>
          <a href="#">Settings</a>
        </div>
      </nav>
      
      <main className="chat-content">
        <header className="page-header">
          <h1>AI Customer Intelligence</h1>
          <p>Powered by advanced RAG technology to provide accurate, real-time responses.</p>
        </header>
        
        <ChatBot />
      </main>
      
      <footer className="app-footer">
        &copy; 2026 ChatBot KL - Intelligent Assistant Portal
      </footer>
    </div>
  )
}


export default App
