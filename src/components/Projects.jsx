import React, { useEffect } from "react";

import { content } from "../content/languages";

import "../styles/Projects.css";

import project1 from "../images/projects/project1.jpg";
import project2 from "../images/projects/project2.jpg";
import project3 from "../images/projects/project3.jpg";
import project4 from "../images/projects/project4.jpg";
import project5 from "../images/projects/project5.jpg";

import partner1 from "../images/partner1.png";
import partner2 from "../images/partner2.png";
import partner3 from "../images/partner3.png";
import partner4 from "../images/partner4.png";

const Projects = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const mainProjects = document.getElementById("main-projects");
      if (mainProjects.getBoundingClientRect().y > 300) {
        mainProjects.classList.remove("main-projects-middle");
        mainProjects.classList.remove("main-projects-right");
        mainProjects.classList.remove("main-projects-half-right");
        mainProjects.classList.remove("main-projects-half-left");
        mainProjects.classList.add("main-projects-left");
      }
      if (
        mainProjects.getBoundingClientRect().y <= 300 &&
        mainProjects.getBoundingClientRect().y >= 200
      ) {
        mainProjects.classList.remove("main-projects-left");
        mainProjects.classList.remove("main-projects-right");
        mainProjects.classList.remove("main-projects-middle");
        mainProjects.classList.remove("main-projects-half-right");
        mainProjects.classList.add("main-projects-half-left");
        return;
      }
      if (
        mainProjects.getBoundingClientRect().y <= 200 &&
        mainProjects.getBoundingClientRect().y >= 100
      ) {
        mainProjects.classList.remove("main-projects-left");
        mainProjects.classList.remove("main-projects-right");
        mainProjects.classList.remove("main-projects-half-left");
        mainProjects.classList.remove("main-projects-half-right");
        mainProjects.classList.add("main-projects-middle");
        return;
      }
      if (
        mainProjects.getBoundingClientRect().y <= 100 &&
        mainProjects.getBoundingClientRect().y >= 0
      ) {
        mainProjects.classList.remove("main-projects-left");
        mainProjects.classList.remove("main-projects-right");
        mainProjects.classList.remove("main-projects-middle");
        mainProjects.classList.remove("main-projects-half-left");
        mainProjects.classList.add("main-projects-half-right");
        return;
      }
      if (mainProjects.getBoundingClientRect().y < 0) {
        mainProjects.classList.remove("main-projects-left");
        mainProjects.classList.remove("main-projects-middle");
        mainProjects.classList.remove("main-projects-half-left");
        mainProjects.classList.remove("main-projects-half-right");
        mainProjects.classList.add("main-projects-right");
        return;
      }
    });
  });

  return (
    <div
      className={`projects ${
        darkMode ? "projects-dark-mode" : "projects-light-mode"
      } `}
      id="projects"
    >
      <h2 className="h2">{languageToUse.projectsTitle}</h2>
      <div className="main-projects" id="main-projects">
        {/* <div className="main-project main-project-1" />
        <div className="main-project main-project-2" />
        <div className="main-project main-project-3" />
        <div className="main-project main-project-4" />
        <div className="main-project main-project-5" /> */}
        <img src={project1} className=" main-project" />
        <img src={project2} className=" main-project" />
        <img src={project3} className=" main-project" />
        <img src={project4} className=" main-project" />
        <img src={project5} className=" main-project" />
      </div>
      <div className="other-projects">
        <ul className="other-projects-list">
          <li>
            <img
              src={partner1}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner2}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner3}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner4}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner1}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner2}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner3}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner4}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner1}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner2}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner3}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner4}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner1}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner2}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner3}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner4}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner1}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner2}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner3}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner4}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner1}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner2}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner3}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner4}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner1}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner2}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner3}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner4}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner1}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner2}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner3}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner4}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner1}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
          <li>
            <img
              src={partner2}
              className={`partner-logo ${
                darkMode ? "partner-logo-dark" : "partner-logo-light"
              }`}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
