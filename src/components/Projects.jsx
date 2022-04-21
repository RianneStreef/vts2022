import React from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/Projects.css";

import partner1 from "../images/partner1.png";
import partner2 from "../images/partner2.png";
import partner3 from "../images/partner3.png";
import partner4 from "../images/partner4.png";

const Projects = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="projects" id="projects">
      <h2>{languageToUse.projectsTitle}</h2>
      <div className="main-projects">
        <div className="main-project-1">
          <div className="main-project-info">
            <p>project description</p>
            <h4>project name</h4>
            <a href="https://leslodgesdepraly.fr" target="_blank">
              Learn more
            </a>
          </div>
        </div>
        <div className="main-project-2">
          <div className="main-project-info">
            <p>project description</p>
            <h4>project name</h4>
            <a href="https://leslodgesdepraly.fr" target="_blank">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="other-projects">
        <ul className="other-projects-list">
          <li>
            <img src={partner1} className="partner-logo" />
          </li>
          <li>
            <img src={partner2} className="partner-logo" />
          </li>
          <li>
            <img src={partner3} className="partner-logo" />
          </li>
          <li>
            <img src={partner4} className="partner-logo" />
          </li>
          <li>
            <img src={partner1} className="partner-logo" />
          </li>
          <li>
            <img src={partner2} className="partner-logo" />
          </li>
          <li>
            <img src={partner3} className="partner-logo" />
          </li>
          <li>
            <img src={partner4} className="partner-logo" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
