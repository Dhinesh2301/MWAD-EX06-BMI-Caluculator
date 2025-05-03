# Ex06 BMI Calculator
## Date:1.05.2025

## AIM
To create a BMI calculator using React Router 

## ALGORITHM
### STEP 1 State Initialization
Manage the current page (Home or Calculator) using React Router.

### STEP 2 User Input
Accept weight and height inputs from the user.

### STEP 3 BMI Calculation
Calculate the BMI based on user input.

### STEP 4 Categorization
Classify the BMI result into categories (Underweight, Normal weight, Overweight, Obesity).

### STEP 5 Navigation
Navigate between pages using React Router.

## PROGRAM
Home.jsx
```
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome!</h2>
      <p>Click below to check your BMI.</p>
      <button onClick={() => navigate('/calculator')}>Start</button>
    </div>
  );
}

export default Home;

```
BMICalculator.js
```
import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [category, setCategory] = useState('');

  const calculate = () => {
    const h = height / 100;
    const b = weight / (h * h);
    setBmi(b.toFixed(2));
    if (b < 18.5) setCategory('Underweight');
    else if (b < 25) setCategory('Normal');
    else if (b < 30) setCategory('Overweight');
    else setCategory('Obesity');
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <br />
      <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
      <br />
      <button onClick={calculate}>Calculate</button>
      {bmi && (
        <div>
          <p>BMI: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;

```
App.jsx
```
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import BMICalculator from './BMICalculator';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <h1>BMI Calculator</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/calculator">Calculator</Link>
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


```

## OUTPUT
![image](https://github.com/user-attachments/assets/f6d44420-9523-47bc-bc93-45067ca9fea1)
![image](https://github.com/user-attachments/assets/354d4d56-fb3b-43fb-867f-f505ba62bfb3)



## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
