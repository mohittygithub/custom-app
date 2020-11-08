import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import LoginApp from './components/login/LoginApp'

function App() {
  return (
    <Router>
      <LoginApp />
    </Router>
  )
}

export default App
