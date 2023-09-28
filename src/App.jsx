import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Schedule from './pages/Schedule/Schedule';
import Trainers from './pages/Trainers/Trainers';
import Classes from './pages/Classes/Classes';
import Aboutus from './pages/Aboutus/Aboutus';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
