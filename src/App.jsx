import './App.css';
import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Classes from './components/Classes/Class';
import Testimonials from './components/Testimonials/Testimonials'
import Plans from './components/Plans/Plans'
import BMI from './components/BMI/Bmi';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Classes />
      <Plans />
      <BMI />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
