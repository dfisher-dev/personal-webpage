import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [showArrows, setShowArrows] = useState(true);

  const handleClick = () => {
    setShowArrows(false); // Hide arrows after clicking any link
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <div className="nav-item">
            {showArrows && <div className="bounce-arrow">⬇</div>}
            <Link to="/" onClick={handleClick}>Home</Link>
          </div>
          <div className="nav-item">
            {showArrows && <div className="bounce-arrow">⬇</div>}
            <Link to="/about" onClick={handleClick}>About</Link>
          </div>
          <div className="nav-item">
            {showArrows && <div className="bounce-arrow">⬇</div>}
            <Link to="/contact" onClick={handleClick}>Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
