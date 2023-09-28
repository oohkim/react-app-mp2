import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import Header from "../Header/Header";
import "./Hero.css";

import image1 from "../../assets/pexels-bruno-bueno-2204203.jpg";
import image2 from "../../assets/pexels-ivan-samkov-4164519.jpg";
import image3 from "../../assets/pexels-leon-ardho-1552249.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <Header />

      <Carousel
        interval={2000}
        className="carousel"
        controls={false}
        indicators={false}
      >
        <Carousel.Item className="carousel-item" interval={2000}>
          <img src={image1} className="d-block w-100" alt="..." />
          <Carousel.Caption className="carousel-caption">
            <h3>SHAPE YOUR PERFECT BODY</h3>
            <p>
              This journey goes beyond societal norms, acknowledging that
              'perfection' isn't one-size-fits-all. It's a dedication to your
              well-being, including fitness, nutrition, and mental strength.
              It's about achievable goals, dedication, and self-acceptance.
            </p>
            <a className="icon-link" href="#">
              Inquire Now <i className="bx bx-right-arrow-alt"></i>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={2000}>
          <img src={image3} className="d-block w-100" alt="..." />
          <Carousel.Caption className="carousel-caption">
            <h3>INCREASE YOUR MUSCLE POWER</h3>
            <p>
              This journey challenges norms, redefining 'perfection.' It's about
              well-being, fitness, nutrition, and resilience. It means setting
              goals, staying committed, and embracing transformation while
              nurturing a positive body connection.
            </p>
            <a className="icon-link" href="#">
              Inquire Now <i className="bx bx-right-arrow-alt"></i>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={2000}>
          <img src={image2} className="d-block w-100" alt="..." />
          <Carousel.Caption className="carousel-caption">
            <h3>
              YOU ONLY FAIL, <br /> WHEN YOU STOP TRYING
            </h3>
            <p>
              This journey goes beyond expectations, redefining 'perfection.'
              It's about well-being, fitness, nutrition, and resilience. Achieve
              goals, stay dedicated, embrace transformation, and foster a
              positive body relationship.
            </p>
            <a className="icon-link" href="#">
              Inquire Now <i className="bx bx-right-arrow-alt"></i>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
