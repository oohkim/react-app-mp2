// Schedule.jsx
import React from "react";
import Table from "react-bootstrap/Table";
import scheduleData from "./scheduleData";
import "./Schedule.css";
import { Image } from "react-bootstrap";
// import Hero from "../../components/Hero/Hero";
import classScheduleImage from "../../assets/SCHEDULES.png";

const Schedule = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      {/* <div className="overlay">
    </div> */}
      <Image
        src={classScheduleImage}
        alt="Class Schedule"
        fluid
        className="class-schedule-image"
      />
      <div className="class-schedule">
        <h2>___CLASS SCHEDULES</h2>
        <p>Check out our weekly class schedule below.</p>
        <div className="table-responsive">
          <Table striped bordered hover className="my-table">
            {" "}
            <thead>
              <tr>
                <th>Time</th>
                {daysOfWeek.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => (
                <tr key={index}>
                  <td className="time-column">{item.time}</td>
                  {daysOfWeek.map((day) => (
                    <td key={day}>{item[day]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="additional-content">
        <h3>Additional Information</h3>
        <p>
          Welcome to our weekly class schedule! Here, you can find details about
          our classes, instructors, and more:
        </p>

        <h4>Class Descriptions:</h4>
        <ul>
          <li>
            <strong>Aerobics:</strong> It's designed to improve cardiovascular
            fitness, endurance, and overall body strength.
          </li>
          <li>
            <strong>Weight Lifting:</strong> It's an effective way to increase
            strength and improve body composition.
          </li>
          <li>
            <strong>Cardio:</strong> They include activities like running,
            swimming, and cycling that elevate your heart rate and help burn
            calories.
          </li>
          <li>
            <strong>Yoga:</strong> Yoga is a mind-body practice that involves a
            combination of physical postures, breathing exercises, and
            meditation.
          </li>
          <li>
            <strong>Body Building:</strong> It typically involves lifting heavy
            weights and following a structured workout plan.
          </li>
          <li>
            <strong>Cycling:</strong> It's great for building leg strength and
            improving endurance.
          </li>
          <li>
            <strong>Stretching:</strong> They can be incorporated into warm-up
            and cool-down routines for other activities or done as a standalone
            practice.
          </li>
        </ul>

        <h4>Instructor Profiles:</h4>
        <ul>
          <li>
            <strong>John Smith:</strong> Certified yoga instructor with 10+
            years of experience.
          </li>
          <li>
            <strong>Lisa Johnson:</strong> Passionate Zumba enthusiast and
            instructor.
          </li>
        </ul>

        <h4>Class Policies:</h4>
        <ul>
          <li>
            <strong>Registration:</strong> Advance registration is required for
            all classes.
          </li>
          <li>
            <strong>Cancellation:</strong> Please notify us at least 24 hours in
            advance if you need to cancel.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Schedule;
