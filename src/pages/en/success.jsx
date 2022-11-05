import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";

import "../../styles/success.css";

import Layout from "../../components/Layout";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import top from "../../images/back.svg";
import topWhite from "../../images/back-white.png";
import sun from "../../images/sun.svg";
import moon from "../../images/moon-white.png";

const SuccessPage = function (props) {
  let { language, languageToUse, darkMode, setDarkMode } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

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
    <div className="success">
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      <p>{languageToUse.thanks}</p>
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
          <button
            onClick={handleDarkMode}
            className="menu-button menu-button-button "
          >
            {darkMode ? <span> LIGHT-MODE</span> : <span> DARK-MODE </span>}
          </button>
        </div>
      </div>
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

SuccessPage.Layout = Layout;
export default SuccessPage;
