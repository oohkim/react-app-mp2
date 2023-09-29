import React from "react";
import "./Class.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/class1.jpeg";
import image2 from "../../assets/class2.jpeg";
import image3 from "../../assets/class3.jpeg";

import backgroundImage from "../../assets/classbg.jpeg";

const Classes = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section className="classes" style={backgroundImageStyle}>
      <h5>____ OUR CLASSES</h5>
      <h1 className="classes-desc">PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</h1>
      <div className="card-container">
        <div className="card">
          <h4>CARDIO</h4>
          <img src={image1} alt="" />
          <div className="button button1">$100</div>
          <div className="intro">
            <h1 className="our-classes">CARDIO</h1>
            <p>
              These classes focus on cardiovascular fitness and can include
              activities like spinning, aerobics, and dance workouts.
            </p>
          </div>
        </div>
        <div className="card">
          <h4>CROSSFIT</h4>
          <img src={image2} alt="" />
          <div className="button button1">$100</div>
          <div className="intro">
            <h1 className="our-classes">CROSSSFIT</h1>
            <p>
              CrossFit combines weightlifting, aerobic exercises, and
              high-intensity functional movements in a group setting to improve
              overall fitness
            </p>
          </div>
        </div>
        <div className="card">
          <h4>KICKBOXING</h4>
          <img src={image3} alt="" />
          <div className="button button1">$100</div>
          <div className="intro">
            <h1 className="our-classes">KICKBOXING</h1>
            <p>
              Kickboxing classes combine martial arts techniques with
              cardiovascular training, enhancing agility and self-defense
              skills.
            </p>
          </div>
        </div>
      </div>
      <Link className="class-link" to="/classes">
        VIEW ALL CLASSES
        <i className="bx bx-right-arrow-alt"></i>
      </Link>
      <div className="promo">
        <h1>7 days training for free</h1>
        <p>
          Complete the training session with us, surely you will be satisfied
          with the results!
        </p>
        <a href="">Help?</a>
      </div>
    </section>
  );
};

export default Classes;
