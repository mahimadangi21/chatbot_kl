import React from 'react'
import ChatBot from './ChatBot'
import './App.css'

function App() {
  return (
    <div className="app-main">
      <nav className="top-nav">
        <div className="logo">
          <div className="logo-icon">KL</div>
          <span>Intelligence Portal</span>
        </div>
        <div className="nav-actions">
          <div className="status-badge"><span className="dot"></span> System Active</div>
          <div className="user-profile">
            <div className="user-avatar">MD</div>
          </div>
        </div>
      </nav>
      
      <div className="dashboard-layout">
        <aside className="sidebar">
          <div className="sidebar-group">
            <label>ANALYTICS</label>
            <a href="#" className="active">Overview</a>
            <a href="#">Interactions</a>
            <a href="#">Sentiment</a>
          </div>
          <div className="sidebar-group">
            <label>KNOWLEDGE</label>
            <a href="#">Collections</a>
            <a href="#">Training Data</a>
          </div>
        </aside>

        <main className="main-content">
          <header className="content-header">
            <div className="header-text">
              <h1>AI Command Center</h1>
              <p>Real-time cognitive processing engine for your enterprise data.</p>
            </div>
            <div className="header-stats">
              <div className="stat-card">
                <span className="label">Uptime</span>
                <span className="value">99.9%</span>
              </div>
              <div className="stat-card">
                <span className="label">Inference</span>
                <span className="value">24ms</span>
              </div>
            </div>
          </header>
          
          <ChatBot />
        </main>
      </div>
    </div>
  )
}


export default App
