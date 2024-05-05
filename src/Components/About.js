import React from "react";
import img from "../Assets/img3.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={img} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to PlaceX, your go-to platform for enhancing your interview skills, finding job opportunities, and planning your career. 
        Our mission is to empower individuals like you to succeed in the competitive job market by providing valuable resources, personalized
         guidance, and AI-driven insights.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Select Your Coach"
          description="Choose your ideal interview coach effortlessly at Place X. Our expert mentors prioritize your interview success, providing tailored guidance."
        />

        <SolutionStep
          title="Set Your Practice Time"
          description="Select the date and time that fits your schedule best, and let our dedicated AI system ensure your readiness with personalized practice sessions."
        />

        <SolutionStep
          title="Unlock Your Potential"
          description="Our cutting-edge AI technology is here to offer expert feedback and customized strategies, empowering you to ace your interviews and achieve your career goals."
        />
      </div>
    </div>
  );
}

export default About;
