import React from "react";

import { content } from "../content/languages";

import "../styles/About.css";

import Xav from "../images/xav.png";

const About = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  console.log(language);
  console.log(languageToUse);

  return (
    <div
      className={`about ${darkMode ? "about-dark-mode" : "about-light-mode"} `}
      id="about"
    >
      <h2 className="h2">{languageToUse.aboutTitle}</h2>
      <div className="intros">
        <div className="intro">
          <img src={Xav} alt="Xavier" className="photo" />
          <p>{languageToUse.xav}</p>
        </div>
        <div className="intro">
          <img src={Xav} alt="Xavier" className="photo" />
          <p>{languageToUse.ri}</p>
        </div>
      </div>
      <p className="intro-text">{languageToUse.intro}</p>
    </div>
  );
};

export default About;
About;
