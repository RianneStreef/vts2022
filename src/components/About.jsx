import React from "react";

import { content } from "../content/languages";

import "../styles/About.css";

import skill1 from "../images/skills/ADOBE-icon.png";
import skill2 from "../images/skills/AI-icon.png";
import skill3 from "../images/skills/Apple-icon.png";
import skill4 from "../images/skills/contentful-icon.png";
import skill5 from "../images/skills/CSS-icon.png";
import skill6 from "../images/skills/GATSBY-icon.png";
import skill7 from "../images/skills/GIT-icon.png";
import skill8 from "../images/skills/HTML-5-icon.png";
import skill9 from "../images/skills/ID-icon.png";
import skill10 from "../images/skills/JS-icon.png";
import skill11 from "../images/skills/PR-icon.png";
import skill12 from "../images/skills/PS-icon.png";
import skill13 from "../images/skills/REACT-icon.png";
import skill14 from "../images/skills/window-icon.png";
import skill15 from "../images/skills/XD-icon.png";

const About = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div
      className={`about ${darkMode ? "about-dark-mode" : "about-light-mode"} `}
      id="about"
    >
      <div className="about-2">
        <p className="intro-text">{languageToUse.intro}</p>
        {darkMode ? (
          <div className="services">
            <div className="service">
              <lord-icon
                src="https://cdn.lordicon.com/sygggnra.json"
                trigger="hover"
                className="service-icon"
                colors="primary:#ffffff"
                style={{ width: "100px", height: "100px" }}
              />
              <p>{languageToUse.designInfo}</p>
            </div>
            <div className="service">
              <lord-icon
                src="https://cdn.lordicon.com/etllbcfy.json"
                trigger="hover"
                className="service-icon"
                colors="primary:#ffffff"
                style={{ width: "100px", height: "100px" }}
              />
              <p>{languageToUse.codeInfo}</p>
            </div>
            <div className="service">
              <lord-icon
                src="https://cdn.lordicon.com/auvicynv.json"
                trigger="hover"
                className="service-icon"
                colors="primary:#ffffff"
                style={{ width: "100px", height: "100px" }}
              />
              <p>{languageToUse.otherInfo}</p>
            </div>
          </div>
        ) : (
          <div className="services">
            <div className="service">
              <lord-icon
                src="https://cdn.lordicon.com/sygggnra.json"
                trigger="hover"
                className="service-icon"
                style={{ width: "100px", height: "100px" }}
              />
              <p>{languageToUse.designInfo}</p>
            </div>
            <div className="service">
              <lord-icon
                src="https://cdn.lordicon.com/etllbcfy.json"
                trigger="hover"
                className="service-icon"
                style={{ width: "100px", height: "100px" }}
              />
              <p>{languageToUse.codeInfo}</p>
            </div>
            <div className="service">
              <lord-icon
                src="https://cdn.lordicon.com/auvicynv.json"
                trigger="hover"
                className="service-icon"
                style={{ width: "100px", height: "100px" }}
              />
              <p>{languageToUse.otherInfo}</p>
            </div>
          </div>
        )}
        <div className="skills">
          <ul className="skills-list">
            <li>
              <img
                src={skill11}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill12}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill13}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill14}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill15}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill1}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill2}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill3}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill4}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill5}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill6}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill7}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill8}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill9}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill10}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill11}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill12}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill13}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill14}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill15}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>

            <li>
              <img
                src={skill1}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill2}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill3}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill4}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill5}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill6}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>

            <li>
              <img
                src={skill7}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill8}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill9}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill10}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill11}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill12}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill13}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill14}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill15}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill1}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill2}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill3}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
            <li>
              <img
                src={skill4}
                className={`skill-logo ${
                  darkMode ? "skill-logo-dark" : "skill-logo-light"
                }`}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
About;
