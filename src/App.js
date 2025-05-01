import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import BMICalculator from './BMICalculator';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>BMI Calculator App</h1>
        <nav>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/calculator">Calculator</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<BMICalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
