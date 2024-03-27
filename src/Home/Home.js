import React from "react";
import "./index.css";
 import homeImage from "../Images/photo.jpg";
import gitImage from "../Images/gitIcon.png";
import linkedInImage from "../Images/linkedinIcon.png";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="body-content">
        <h1 className="animate__animated  animate__bounce  home-content">Hi</h1>
        <h1 className="animate__animated animate__bounce   home-content">
          I'm Murali
        </h1>
        <h1 className="animate__animated animate__bounce   home-content">
          Full Stack Web Developer
        </h1>
        <br /> 
        <a
          href={"https://github.com/Muralitharan171"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitImage} alt="github" />
        </a>{" "}
        {"  "}
        <a
          href={"https://www.linkedin.com/in/murali-tharan-777462216/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInImage} alt="linkedin" />
        </a>
        <br />
        <button className="btn btn-resume">
          <a href={"https://drive.google.com/file/d/1txp5UrSGZTadMXTORB3vT8EjD-JaodQo/view?usp=drive_link"}
          target="_blank"
          rel="noopener noreferrer" 
          >
            Resume
          </a>
        </button>
      </div>

      <div className="contact-logo"></div>
      
      <img src={homeImage} alt="Home" />
      
    </div>
  );
};
export default Home;