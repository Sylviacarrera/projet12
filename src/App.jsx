import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import '../public/App.css';

const WorkInProgress = () => (
  <div>
    <h1>Work in Progress</h1>
    <p>Cette page est en cours de construction.</p>
  </div>
); 
function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
