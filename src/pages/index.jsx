import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Options from "../components/Options";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import top from "../images/top.svg";
import topWhite from "../images/top-white.png";
import sun from "../images/sun.svg";
import moon from "../images/moon-white.png";

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
    var backgroundColorTransparent = document.documentElement.style;
    var textColor = document.documentElement.style;

    if (darkMode === true) {
      backgroundColor.setProperty("--color-background", "#fff");
      backgroundColorTransparent.setProperty(
        "--color-background-transparent",
        "rgb(0, 0, 0, 0.50)"
      );
      textColor.setProperty("--color-text", "#000");
    } else {
      backgroundColor.setProperty("--color-background", "#000");
      backgroundColorTransparent.setProperty(
        "--color-background-transparent",
        "rgb(255, 255, 255, 0.75)"
      );
      textColor.setProperty("--color-text", "#fff");
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
      <Options
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

          <Link to="/#projects" className="menu-button">
            PROJECTS
          </Link>
          <Link to="/#about" className="menu-button">
            ABOUT
          </Link>
          <Link to="/#options" className="menu-button">
            OPTIONS
          </Link>
          <Link to="/#contact" className="menu-button">
            CONTACT
          </Link>
          <button
            onClick={handleDarkMode}
            className="menu-button menu-button-button "
          >
            {darkMode ? <span> LIGHT-MODE</span> : <span> DARK-MODE </span>}
          </button>
        </div>
      </div>
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
        darkMode={darkMode}
      />
      <div className="mobile-menu mobile-only">
        {darkMode ? (
          <img src={moon} className="dark-mode-icon" onClick={handleDarkMode} />
        ) : (
          <img src={sun} className="dark-mode-icon" onClick={handleDarkMode} />
        )}
        <Link to="/" className="top-link ">
          {darkMode ? (
            <img src={topWhite} className="top-link" />
          ) : (
            <img src={top} className="top-link" />
          )}
        </Link>
      </div>
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
