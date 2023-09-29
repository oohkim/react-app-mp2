import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a className="footer-logo" href="#">
          Fit<span className="red">Zone</span>
        </a>
        <div className="footer-links">
          <ul>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus">About</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <a href="#plans">Plans</a>
            </li>
            <li>
              <Link to="/trainers">Trainers</Link>
            </li>
            <li>
              <Link to="/schedule">Schedules</Link>
            </li>
            <li>
              <a href="#join-us">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#" className="socials">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="socials">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="socials">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FitZone. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
