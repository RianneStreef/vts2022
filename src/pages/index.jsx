import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

const IndexPage = function (props) {
  let { language, setLanguage, languageToUse, darkMode, setDarkMode } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  function handleDarkMode() {
    setDarkMode(!darkMode);

    var backgroundColor = document.documentElement.style;
    var textColor = document.documentElement.style;
    var shadowColor = document.documentElement.style;

    if (darkMode === true) {
      backgroundColor.setProperty("--color-background", "#b59b7c");
      textColor.setProperty("--color-text", "#fff");
      shadowColor.setProperty("--color-highlight", "#d31376");
    } else {
      backgroundColor.setProperty("--color-background", "#000");
      textColor.setProperty("--color-text", "#fff");
      shadowColor.setProperty("--color-highlight", "#40c8e0");
    }
  }

  return (
    <div>
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
        <script src="https://cdn.lordicon.com/xdjxvujz.js" />
      </Helmet>
      <Hero
        language={language}
        languageToUse={languageToUse}
        darkMode={darkMode}
      />
      <Projects
        language={language}
        languageToUse={languageToUse}
        darkMode={darkMode}
      />
      <About
        language={language}
        languageToUse={languageToUse}
        darkMode={darkMode}
      />

      <Contact language={language} languageToUse={languageToUse} />
      <div className="set-language-fixed">
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
      <div className="menu-container hidden-mobile ">
        <div className="fixed-menu">
          <Link to="/" id="top" className="menu-button">
            TOP
          </Link>

          <Link to="/#projects" id="top" className="menu-button">
            PROJECTS
          </Link>
          <Link to="/#about" id="top" className="menu-button">
            ABOUT
          </Link>
          <Link to="/#contact" id="top" className="menu-button">
            CONTACT
          </Link>
          <button onClick={handleDarkMode} className="menu-button">
            {darkMode ? <span> Light-mode</span> : <span> Dark-mode </span>}
          </button>
        </div>
      </div>
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
