import React, { useEffect } from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import logoWhite from "../images/logo-white.png";
import logoBlack from "../images/logo-no-tag.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage, darkMode } = props;

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  useEffect(() => {
    const header = document.getElementById("header");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        header.classList.remove(scrollUp);
        return;
      }

      if (
        currentScroll > lastScroll &&
        !header.classList.contains(scrollDown)
      ) {
        header.classList.remove(scrollUp);
        header.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        header.classList.contains(scrollDown)
      ) {
        header.classList.remove(scrollDown);
        header.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  });

  return (
    <div className="header scroll-up" id="header">
      {darkMode ? (
        <img src={logoWhite} alt="Logo" className="header-logo" />
      ) : (
        <img src={logoBlack} alt="Logo" className="header-logo" />
      )}
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
      </ul>
      <div className="set-language hidden-mobile">
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
      </div>
    </div>
  );
};

export default Header;
