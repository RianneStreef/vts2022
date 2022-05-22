import React from "react";

import { Link } from "gatsby";

import "../styles/Hero.css";
import heroImage from "../images/hero-image.png";

import { content } from "../content/languages";

const Hero = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  return (
    <div className="hero">
      <h1>VTS-WEB DESIGN</h1>
      <h2>{languageToUse.heroTitle}</h2>
      <div className="hero-links">
        <Link to="/#contact" className="hero-button hero-button-blue">
          Contact Us!
        </Link>
        <Link to="/#projects" className="hero-button hero-button-transparent">
          Partners
        </Link>
      </div>
    </div>
  );
};

export default Hero;
