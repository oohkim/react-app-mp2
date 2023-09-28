import React from "react";
import "./Classes.css";
import classesData from "./classesData";
import { Image, Card, Button } from "react-bootstrap";
import Join from "../../components/Join/Join";
import gymClasses from "../../assets/gym-classes.png";

const Classes = () => {
  return (
    <>
      <Image
        src={gymClasses}
        alt="Gym Classes"
        fluid
        className="class-schedule-image"
      />
      <div className="classes-container">
        <h2>___OUR CLASSES</h2>
        <p>Welcome to our variety of classes to help you achieve your fitness goals. Join Now!</p>
        <div className="class-list">
          {classesData.map((classItem, index) => (
            <Card key={index} className="classes-card">
              <div className="hover-button">
                <Button variant="secondary">Mon-Fri <br />8am - 9am</Button>
              </div>
              <Card.Img variant="top" src={classItem.image} alt={classItem.title} />
              <Card.Body>
                <Card.Title>{classItem.title}</Card.Title>
                <Card.Text>{classItem.description}</Card.Text>
                <Card.Text><strong>Price:</strong> {classItem.price}</Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Join />
    </>
  );
};

export default Classes;
