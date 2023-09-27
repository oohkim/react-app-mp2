import React from "react";
import "./Trainers.css";
import trainersData from "./trainersData";
import { Image, Button } from "react-bootstrap";
import ourCoach from "../../assets/Our Coach.png";
import Join from "../../components/Join/Join";

const Trainers = () => {
  return (
    <>
      <Image src={ourCoach} alt="Our Coach" fluid className="coach-image" />
      <div className="trainers-container">
        <h2>___OUR TRAINERS</h2>
        <p>
          Meet our dedicated team of fitness experts who are here to help you
          achieve your fitness goals.
        </p>
        <div className="trainer-list">
          {trainersData.map((trainer, index) => (
            <div className="trainer-card" key={index}>
              <img
                src={trainer.image}
                alt={trainer.name}
                className="trainer-image"
              />
              <Button className="enroll-button">Join Us</Button>
              <h3>{trainer.name}</h3>
              <p className="trainers-p">{trainer.specialty}</p>
            </div>
          ))}
        </div>
      </div>
      <Join />
    </>
  );
};

export default Trainers;
