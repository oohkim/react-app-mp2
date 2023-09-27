import React from 'react'
import './Plans.css'
import { plansData } from "./plansData.jsx";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="skewed-background"></div>
      <div className="program-header">
        <p>___DISCOVER OUR FITNESS PLANS</p>
      </div>
      <div className="program-description">
        <p>Choose from a variety of fitness plans tailored to your goals and preferences. Our expert trainers <br /> are here to help you achieve your fitness journey.</p>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            <i className="bx bx-dumbbell dumbbell"></i>
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <i className="bx bx-check-shield tick"></i>
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <a href=""><span>See more benefits<i class='bx bx-right-arrow-alt' ></i></span></a>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
} 

export default Plans;