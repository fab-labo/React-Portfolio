import React from "react";
import "./CSS/resume.css"; 

function Resume() {
  const buttonClick = () => {
    const resumeUrl = "/Resume.pdf"; // File should be in the public folder
    const fileName = "Resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = resumeUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="container">
      <div className="resume-card">
        <h2 className="resume-title">My Resume</h2>
        <p className="resume-description">
          Download my resume or explore the skills I’ve mastered.
        </p>
        <div className="skills-section">
          <h4 className="skills-title">Technical Skills</h4>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>React</li>
          </ul>
        </div>
        <button onClick={buttonClick} className="download-button">
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;
