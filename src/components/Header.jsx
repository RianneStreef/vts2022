import React from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import logo from "../images/logo-white.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";
import flagNl from "../images/icon-nl.png";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage } = props;

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="header">
      <div className="hidden-desktop">
        <Burger
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
      </div>
      <ul className="links hidden-mobile">
        <li>
          <Link to="/#about" className="nav-link">
            {languageToUse.about}
          </Link>
        </li>
        <li>
          <Link to="/#projects" className="nav-link">
            {languageToUse.projects}
          </Link>
        </li>
        <li>
          <Link to="/#contact" className="nav-link">
            {languageToUse.contact}
          </Link>
        </li>

        <li>
          <div className="set-language">
            <button
              onClick={() => handleSetLanguage("english")}
              onKeyPress={() => handleSetLanguage("english")}
              className="invisible-button"
            >
              <img
                src={flagEn}
                alt="english"
                className={`flag ${
                  languageToUse.language === "english" ? "opaque" : "fade"
                } `}
              />
            </button>
            <button
              onClick={() => handleSetLanguage("french")}
              onKeyPress={() => handleSetLanguage("french")}
              className="invisible-button"
            >
              <img
                src={flagFr}
                alt="français"
                className={`flag ${
                  languageToUse.language === "french" ? "opaque" : "fade"
                } `}
              />
            </button>
            <button
              onClick={() => handleSetLanguage("dutch")}
              onKeyPress={() => handleSetLanguage("dutch")}
              className="invisible-button"
            >
              <img
                src={flagNl}
                alt="nederlands"
                className={`flag ${
                  languageToUse.language === "dutch" ? "opaque" : "fade"
                } `}
              />
            </button>
          </div>
        </li>
      </ul>
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="header-logo" />
      </Link>
    </div>
  );
};

export default Header;
