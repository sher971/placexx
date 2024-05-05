import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Place <span className="legal-siteSign">x</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to Place X, your premier AI-powered interview preparation platform. Our mission is to offer accessible and personalized interview guidance to individuals seeking career advancement. By using our platform, you agree to the terms outlined in our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        We prioritize your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information. Rest assured, we handle data securely and treat your information with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        When using Place X, you agree to our Terms of Service. This includes guidelines for using our platform, interacting with mentors, and the responsibilities of both parties. It's essential to understand these terms to ensure a smooth experience for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Our platform connects you with expert mentors who provide online consultations. These sessions are not intended to replace in-person interviews but offer a convenient option for interview advice, guidance, and practice. Providing accurate and complete information is crucial for receiving the best possible guidance.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        Welcome to Place X, your premier AI-powered platform for mock interviews. We simplify interview preparation by providing access to expert mentors, scheduling practice sessions, and facilitating virtual consultations. Our mentors offer personalized advice and strategies tailored to your needs. 
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2019-2024 PlaceX. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
