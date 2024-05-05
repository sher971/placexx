import React from "react";
import InformationCard from "./InformationCard";
import { faLaptop, faMapLocationDot, faSearch, faClipboardQuestion, faUser, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import { Link } from "react-router-dom";


function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        We revolutionize interview preparation, providing a seamless platform for honing your
         skills. Our AI-powered mock interview system offers tailored practice sessions designed
          to elevate your performance. Whether you're gearing up for a job interview or admissions
           process, we're here to help you shine.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="1-on-1 Mentoring"
          description="Connect with experienced mentors for personalized guidance, interview practice sessions, and career advice."
          icon={faLaptop}
        />

        <InformationCard
          title="AI-Powered Roadmap"
          description="Get personalized career roadmaps and recommendations based on AI analysis of your skills, interests, and goals."
          icon={faMapLocationDot}
        />

        <InformationCard
          title="Job Search"
          description="Search for job opportunities across various industries and locations to find your dream job."
          icon={faSearch}
        />
        <Link to="/Faq" className="link-unstyled">
        <InformationCard
          title="Top 100 Technical Questions"
          description="Explore a curated list of the most frequently asked technical interview questions along with detailed explanations and solutions."
          icon={faClipboardQuestion}
        />
        </Link>

        <InformationCard
          title="HR Corner"
          description="Access valuable resources, tips, and insights from HR professionals to prepare for interviews and boost your career."
          icon={faUser}
        />
        <InformationCard
          title="Internship Search"
          description="Discover internship programs offered by leading companies to kickstart your career journey."
          icon={faBriefcase}
        />
        <Link to="/Quiz" className="link-unstyled">
         <InformationCard
          title="Aptitude Corner"
          description="Discover internship programs offered by leading companies to kickstart your career journey."
          icon={faBriefcase}
        />
        </Link>

        <InformationCard
          title="Resume Builder"
          description="Discover internship programs offered by leading companies to kickstart your career journey."
          icon={faBriefcase}
        />
      </div>
      

      
    </div>
  );
}

export default Info;
