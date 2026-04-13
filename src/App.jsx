import React from 'react'
import ChatBot from './ChatBot'
import './App.css'

function App() {
  return (
    <div className="app-main">
      <header className="minimal-header">
        <h1>KL Intelligence Portal</h1>
      </header>
      
      <main className="chat-centered-container">
        <ChatBot />
      </main>
    </div>
  )
}


export default App
