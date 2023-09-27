import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "./testimonialsData.jsx";
import "boxicons";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>___Testimonials</span>
        <span>What they say about us</span>
        <span></span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--primary)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <i
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            className="bx bxs-left-arrow-circle"
          ></i>
          <i
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev => prev + 1));
            }}
            className="bx bxs-right-arrow-circle"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
