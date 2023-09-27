import React from "react";
import "./Trainers.css";
import trainersData from "./trainersData";
import Hero from '../../components/Hero/Hero';

const Trainers = () => {
  return (
    <>
    <Hero />
      <div className="trainers-container">
        <h2>Our Trainers</h2>
        <div className="trainer-list">
          {trainersData.map((trainer, index) => (
            <div className="trainer-card" key={index}>
              <img
                src={trainer.image}
                alt={trainer.name}
                className="trainer-image"
              />
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trainers;
