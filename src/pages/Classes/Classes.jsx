import React from "react";
import "./Classes.css"; // Create a corresponding CSS file
import classesData from "./classesData"; // Import data for your classes
import { Card, Button } from "react-bootstrap"; // Use Bootstrap components if needed
import Hero from '../../components/Hero/Hero'

const Classes = () => {
  return (
    <>
    <Hero />
        <div className="classes-container">
      <h2>Our Classes</h2>
      <div className="class-list">
        {classesData.map((classItem, index) => (
          <Card key={index} className="class-card">
            <Card.Img variant="top" src={classItem.image} alt={classItem.title} />
            <Card.Body>
              <Card.Title>{classItem.title}</Card.Title>
              <Card.Text>{classItem.description}</Card.Text>
              <Button variant="primary">Enroll</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
};

export default Classes;
