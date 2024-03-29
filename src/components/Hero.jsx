import React from "react";

import { Link } from "gatsby";

import "../styles/Hero.css";

import heroImg from "../images/LOGO-FR.svg";
import heroImgWhite from "../images/LOGO-FR-White.svg";
import heroImgEn from "../images/LOGO-EN.svg";
import heroImgEnWhite from "../images/LOGO-EN-White.svg";

import { content } from "../content/languages";

const Hero = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  console.log("language in hero");
  console.log(language);

  return (
    <div className="hero">
      {darkMode ? (
        <div className="hero-image-container">
          {language === "french" ? (
            <img src={heroImgWhite} className="hero-image" />
          ) : (
            <img src={heroImgEnWhite} className="hero-image" />
          )}
        </div>
      ) : (
        <div className="hero-image-container">
          {language === "french" ? (
            <img src={heroImg} className="hero-image" />
          ) : (
            <img src={heroImgEn} className="hero-image" />
          )}
        </div>
      )}
      <div className="hero-links">
        <Link
          to={`${language === "english" ? "/en/#contact" : "/#contact"}`}
          className="hero-button hero-button-blue"
        >
          {languageToUse.contactTitle}
        </Link>
        <Link
          to={`${language === "english" ? "/en/#projects" : "/#projects"}`}
          className="hero-button hero-button-transparent"
        >
          {languageToUse.projects}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
