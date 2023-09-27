import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <a className="footer-logo" href="#">
              Fit<span className="red">Zone</span>
            </a>
        <div className="footer-links">
          <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="">Plans</a></li>
            <li><a href="">News</a></li>
            <li><a href="#">Contact</a></li>
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
      {/* <div className="footer-address">
        <p><i className="bx bx-map"></i> 15-11 McArthur Highway, Angeles, Philippines 2009</p>
      </div> */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FitZone. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
