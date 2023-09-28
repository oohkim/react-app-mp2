import React from "react";
import "./Aboutus.css";
// import aboutImage from "../../assets/yoga.png";
import Ceo from "../../assets/ceo.jpeg";
import Marketing from "../../assets/marketing.jpeg";
import Head from "../../assets/head.jpeg";
import Hero from "../../components/Hero/Hero";

const AboutUs = () => {
  return (
    <>
      <Hero />
      <section id="aboutus">
        <div className="about-container">
          <div className="about-content">
            {/* <img src={aboutImage} alt="About Us" className="about-image" /> */}
            <div className="about-text">
              <h2>___About Us</h2>
              <p>
                Welcome to FitZone, your ultimate fitness destination. At
                FitZone, we are passionate about helping you lead a healthier
                and happier life through fitness and well-being. Our mission is
                to empower individuals of all ages and fitness levels to achieve
                their goals and unlock their full potential.
              </p>
              <p>
                Founded in [Year], FitZone has been a staple in the fitness
                community, offering a wide range of fitness programs and
                services to meet the diverse needs of our members. Our dedicated
                team of experienced trainers and instructors is committed to
                providing exceptional guidance and support on your fitness
                journey.
              </p>
              <p>
                Our state-of-the-art facilities are designed to create an
                inviting and motivating atmosphere. We offer the latest fitness
                equipment and a variety of group classes, including cardio,
                strength training, yoga, and more. Whether you're looking to
                shed those extra pounds, build muscle, increase flexibility, or
                simply de-stress, we have the resources and expertise to help
                you reach your goals.
              </p>
              <p>
                FitZone is not just a gym; it's a community where like-minded
                individuals come together to inspire and support one another. We
                believe that fitness should be enjoyable and accessible to all,
                fostering a sense of belonging and camaraderie among our
                members. Joining FitZone means joining a family that shares your
                dedication to a healthier lifestyle.
              </p>
              <p>
                We're more than just a place to work out; we're a place to
                belong. Your journey to a healthier, fitter, and happier you
                begins here at FitZone. We invite you to become a part of our
                FitZone family and experience the transformative power of
                fitness with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="team-container">
          <h2>Meet Our Team</h2>
          <div className="team-cards">
            <div className="team-card">
              <img src={Ceo} alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>Co-Founder & CEO</p>
              <p>Passionate about fitness and leadership.</p>
              <div className="social-links">
                <a href="#" className="bx bxl-facebook"></a>
                <a href="#" className="bx bxl-linkedin"></a>
                <a href="#" className="bx bxl-twitter"></a>
              </div>
            </div>
            <div className="team-card">
              <img src={Marketing} alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Marketing Director</p>
              <p>Bringing creative ideas to fitness promotion.</p>
              <div className="social-links">
                <a href="#" className="bx bxl-facebook"></a>
                <a href="#" className="bx bxl-linkedin"></a>
                <a href="#" className="bx bxl-twitter"></a>
              </div>
            </div>
            <div className="team-card">
              <img src={Head} alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>Head Operations</p>
              <p>Ensuring smooth gym operations.</p>
              <div className="social-links">
                <a href="#" className="bx bxl-facebook"></a>
                <a href="#" className="bx bxl-linkedin"></a>
                <a href="#" className="bx bxl-twitter"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
