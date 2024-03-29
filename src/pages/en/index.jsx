import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";

import "../../styles/global.css";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Options from "../../components/Options";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

import flagEn from "../../images/icon-en.png";
import flagFr from "../../images/icon-fr.png";

import top from "../../images/top.svg";
import topWhite from "../../images/top-white.png";
import sun from "../../images/sun-white.png";
import moon from "../../images/moon.svg";

import ReactGA from "react-ga4";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

const IndexPage = function (props) {
  let { language, setLanguage, darkMode, setDarkMode } = props;

  let languageToUse = content.english;

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  const initGA = (id) => {
    // if (process.env.NODE_ENV === "production") {
    console.log("InitGA");
    ReactGA.initialize(id);
    //}
  };

  const handleAcceptCookie = () => {
    initGA("G-N4375M51XE");
  };

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();

    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

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
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
        <script src="https://cdn.lordicon.com/xdjxvujz.js" />
      </Helmet>
      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        buttonText={languageToUse.cookieAccept}
        declineButtonText={languageToUse.cookieDecline}
      >
        <p className="cookie-text-header">{languageToUse.cookieHeader}</p>
        <p className="cookie-text">{languageToUse.cookieText}</p>
      </CookieConsent>
      <Hero
        language={language}
        languageToUse={languageToUse}
        darkMode={darkMode}
      />
      <Projects languageToUse={languageToUse} darkMode={darkMode} />
      <About languageToUse={languageToUse} darkMode={darkMode} />
      {/* <Options
        language={language}
        languageToUse={languageToUse}
        darkMode={darkMode}
      /> */}
      <Contact languageToUse={languageToUse} />
      <div className="set-language-fixed">
        <Link
          to="/en/"
          onClick={() => handleSetLanguage("english")}
          onKeyPress={() => handleSetLanguage("english")}
        >
          {/* <button
          onClick={() => handleSetLanguage("english")}
          onKeyPress={() => handleSetLanguage("english")}
          className="invisible-button"
        > */}
          <img
            src={flagEn}
            alt="english"
            className={`flag ${
              languageToUse.language === "english" ? "opaque" : "fade"
            } `}
          />
          {/* </button> */}
        </Link>
        {/* <button
          onClick={() => handleSetLanguage("french")}
          onKeyPress={() => handleSetLanguage("french")}
          className="invisible-button"
        > */}
        <Link
          to="/"
          onClick={() => handleSetLanguage("french")}
          onKeyPress={() => handleSetLanguage("french")}
        >
          <img
            src={flagFr}
            alt="français"
            className={`flag ${
              languageToUse.language === "french" ? "opaque" : "fade"
            } `}
          />
          {/* </button> */}
        </Link>
      </div>
      <div className="menu-container hidden-mobile ">
        <div className="fixed-menu">
          <Link to="/en/" id="top" className="menu-button">
            TOP
          </Link>

          <Link to="/en/#projects" className="menu-button">
            {languageToUse.projects}
          </Link>
          <Link to="/en/#about" className="menu-button">
            {languageToUse.about}
          </Link>
          {/* <Link to="/en/#options" className="menu-button">
            OPTIONS
          </Link> */}
          <Link to="/en/#contact" className="menu-button">
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
      <Footer languageToUse={languageToUse} darkMode={darkMode} />
      <div className="mobile-menu mobile-only">
        {darkMode ? (
          <img src={sun} className="dark-mode-icon" onClick={handleDarkMode} />
        ) : (
          <img src={moon} className="dark-mode-icon" onClick={handleDarkMode} />
        )}
        <Link to="/en/" className="top-link ">
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
