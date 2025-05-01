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
Home.js
```
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
```
BMICalculator.js
```
import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const h = height / 100; // convert to meters
    const bmiValue = weight / (h * h);
    setBMI(bmiValue.toFixed(2));

    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 24.9) setCategory('Normal weight');
    else if (bmiValue < 29.9) setCategory('Overweight');
    else setCategory('Obesity');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br /><br />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br /><br />
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div style={{ marginTop: '20px' }}>
          <h3>Your BMI: {bmi}</h3>
          <p>Category: <strong>{category}</strong></p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
```

## OUTPUT
![image](https://github.com/user-attachments/assets/a3ac65d3-19cf-4454-a53f-1c20eb29ae0b)
![image](https://github.com/user-attachments/assets/043a0764-8960-4acb-8940-985a2b0b8302)


## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
