import React, { useEffect } from "react";

import { content } from "../content/languages";

import "../styles/Projects.css";

import project1 from "../images/projects/project1.jpg";
import project2 from "../images/projects/projectZenith.jpg";
import project3 from "../images/projects/project3.jpg";
import project4 from "../images/projects/project4.jpg";
import project5 from "../images/projects/projectCTD.jpg";

import partner1 from "../images/partner1.png";
import partner2 from "../images/partner2.png";
import partner3 from "../images/partner3.png";
import partner4 from "../images/partner4.png";
import partner5 from "../images/partner5.png";
import partner6 from "../images/partner6.png";
import partner7 from "../images/partner7.png";

const Projects = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const mainProjects = document.getElementById("main-projects");
      if (window.innerWidth > 768) {
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
      }
    });
  });

  return (
    <div className="projects" id="projects">
      <div
        className={` ${
          darkMode ? "main-projects-dark-mode" : "main-projects-light-mode"
        } `}
      >
        <div className="main-projects" id="main-projects">
          <a href="https://www.sebgourmet-traiteur.com" target="blank">
            <img src={project1} className=" main-project" />
          </a>
          <a href="https://www.claireturner-design.com" target="blank">
            <img src={project2} className=" main-project" />
          </a>
          <a href="https://leslodgesdepraly.fr/" target="blank">
            <img src={project3} className=" main-project" />
          </a>
          <img src={project4} className=" main-project" />

          <a href="https://lafaceouest.com" target="blank">
            <img src={project5} className=" main-project" />
          </a>
        </div>
      </div>
      <div className="other-projects">
        <ul className="other-projects-list">
          <li>
            <a href="https://www.claireturner-design.com" target="blank">
              <img
                src={partner1}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.coremove.nl" target="blank">
              <img
                src={partner2}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.chalet-du-caribou.com" target="blank">
              <img
                src={partner3}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.sebgourmet-traiteur.com" target="blank">
              <img
                src={partner4}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.leslodgesdepraly.fr" target="blank">
              <img
                src={partner5}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://lafaceouest.com" target="blank">
              <img
                src={partner6}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://zenith-skishop.com" target="blank">
              <img
                src={partner7}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.claireturner-design.com" target="blank">
              <img
                src={partner1}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.coremove.nl" target="blank">
              <img
                src={partner2}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.chalet-du-caribou.com" target="blank">
              <img
                src={partner3}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.sebgourmet-traiteur.com" target="blank">
              <img
                src={partner4}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.leslodgesdepraly.fr" target="blank">
              <img
                src={partner5}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://lafaceouest.com" target="blank">
              <img
                src={partner6}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://zenith-skishop.com" target="blank">
              <img
                src={partner7}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.claireturner-design.com" target="blank">
              <img
                src={partner1}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.coremove.nl" target="blank">
              <img
                src={partner2}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.chalet-du-caribou.com" target="blank">
              <img
                src={partner3}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.sebgourmet-traiteur.com" target="blank">
              <img
                src={partner4}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.leslodgesdepraly.fr" target="blank">
              <img
                src={partner5}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://lafaceouest.com" target="blank">
              <img
                src={partner6}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://zenith-skishop.com" target="blank">
              <img
                src={partner7}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.claireturner-design.com" target="blank">
              <img
                src={partner1}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
          <li>
            <a href="https://www.coremove.nl" target="blank">
              <img
                src={partner2}
                className={`partner-logo ${
                  darkMode ? "partner-logo-dark" : "partner-logo-light"
                }`}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
