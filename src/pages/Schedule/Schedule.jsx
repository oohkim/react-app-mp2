// Schedule.jsx
import React from 'react';
import Table from 'react-bootstrap/Table';
import scheduleData from './scheduleData';
import './Schedule.css';
import Hero from '../../components/Hero/Hero';

const Schedule = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <>
      <Hero />
      <div className="class-schedule">
        <h2>Class Schedule</h2>
        <Table striped bordered hover className="my-table"> {/* Apply the class name */}
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
    </>
  );
};

export default Schedule;
