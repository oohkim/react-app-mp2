import React, { useRef, useState } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const [emailValue, setEmailValue] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gl1llva",
        "template_8rlxaqr",
        form.current,
        "VDKcHtxSmfAFQp7Fw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmailValue("");
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span>READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            value={emailValue}
            onChange={handleEmailChange}
          />
          <button className="btn btn-j" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;