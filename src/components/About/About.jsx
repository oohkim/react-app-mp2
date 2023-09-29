import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/pexels-photo-12472019.jpeg";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="about" id="about">
      <img src={image1} alt="" />
      <div className="article">
        <h5>____ ABOUT OUR GYM</h5>
        <h2>
          SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
        </h2>
        <p className="content">
          At FitZone, we are passionate about helping you achieve your fitness
          goals and lead a healthier life. With years of experience in the
          fitness industry, our team of certified trainers and nutrition experts
          is dedicated to guiding you on your fitness journey.
        </p>
        <p className="content">
          Our mission is simple: to inspire and empower individuals to
          prioritize their health and well-being. We believe that fitness is not
          just about physical strength but also mental resilience. Through our
          tailored fitness programs, nutrition plans, and expert guidance, we
          aim to transform lives one step at a time.
        </p>
        <p className="content">
          Whether you're a seasoned fitness enthusiast or just starting on your
          path to wellness, FitZone welcomes you with open arms. We offer a wide
          range of fitness classes, personalized training sessions, and wellness
          programs to cater to your unique needs and preferences.
        </p>
        <p className={`more ${isExpanded ? "" : "hide"}`}>
          Join us today, and let's embark on a journey towards a healthier,
          happier you. Together, we'll sweat, strive, and succeed!
          <div className={`icon-links ${isExpanded ? "" : "hide"}`}>
            <Link className="icon-link" to="/classes">
              <i className="bx bx-right-arrow-alt"></i>
              MEN FITNESS AND WORKOUT
            </Link>
            <Link className="icon-link" to="/classes">
              <i className="bx bx-right-arrow-alt"></i>
              WOMEN FITNESS AND WORKOUT
            </Link>
            <Link className="icon-link" to="/classes">
              <i className="bx bx-right-arrow-alt"></i>
              PERSONAL TRAININGS
            </Link>
          </div>
        </p>
        <button onClick={toggleReadMore}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
};

export default About;
