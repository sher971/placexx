import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.jpg";
import profile2 from "../Assets/profile-2.jpg";
import profile3 from "../Assets/profile-3.jpg";
import profile4 from "../Assets/profile-4.jpg";
import "../Styles/Doctors.css";

function Features() {
  return (
    <div className="doctor-section" id="features">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Mentors</span>
        </h3>

        <p className="dt-description">
        Meet our exceptional team of interview mentors, dedicated to providing top-notch guidance at Place X. Trust in their expertise and experience to lead you towards interview success and career fulfillment.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Kathryn Murphy"
          title="Data Analyst"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Jacob Jones"
          title="Specialist in Machine Learning"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Ms. Jenny Wilson"
          title="Project Manager"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Albert Flores"
          title="Specialist in Cyber Security"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Features;
