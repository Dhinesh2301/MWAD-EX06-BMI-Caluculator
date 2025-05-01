import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome to the BMI Calculator</h2>
      <p>Click the button below to calculate your Body Mass Index.</p>
      <button onClick={() => navigate('/calculator')}>Go to Calculator</button>
    </div>
  );
};

export default Home;
