import React, { useState } from 'react';
import './Bmi.css';
import bmiImage from '../../assets/bmi-image-removebg-preview.png';
import axios from 'axios';

function BMI() {
  const [bmiData, setBmiData] = useState(null);
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://fitness-calculator.p.rapidapi.com/bmi',
      params: formData,
      headers: {
        'X-RapidAPI-Key': '02222d7fd4msh3958db4458a3ab7p14baa1jsn672304c57975',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const bmiResult = response.data;
      setBmiData(bmiResult);
      console.log(bmiResult);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => {
    setFormData({});
    setBmiData(null);
  };

  const classifyBMI = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <div className="container mt-5 container-skew">
      <div className="container-background"></div>
      <div className="row">
        <div className="col-md-6">
          <img src={bmiImage} alt="BMI" className="img-fluid" />
        </div>
        <div className="col-md-6 bmi-form">
      <h1 className="mb-4 bmi-title">BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Weight (kg):</label>
          <input
            type="number"
            className="form-control"
            name="weight"
            value={formData.weight || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Height (cm):</label>
          <input
            type="number"
            className="form-control"
            name="height"
            value={formData.height || ''}
            onChange={handleChange}
          />
        </div>
        <div className="text-center bmi-buttons">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-secondary ml-2" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      <hr />
      {bmiData ? (
        <div className="result mt-4">
          <h2>BMI: {bmiData.data.bmi}</h2>
          <p>Health: {bmiData.data.health}</p>
          <p>Healthy BMI Range: {bmiData.data.healthy_bmi_range}</p>
          <p>Classification: {classifyBMI(bmiData.data.bmi)}</p>
        </div>
      ) : (
        <p className="mt-4 submit">Submit the form to calculate BMI.</p>
      )}
    </div>
    </div>
    </div>
  );
}

export default BMI;