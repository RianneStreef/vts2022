import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = function (props) {
  let { language, languageToUse, darkMode, setDarkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  console.log("languageToUse in index");
  console.log(languageToUse);

  function handleDarkMode() {
    setDarkMode(!darkMode);
    console.log(darkMode);

    var backgroundColor = document.documentElement.style;
    var textColor = document.documentElement.style;
    var shadowColor = document.documentElement.style;

    if (darkMode === true) {
      backgroundColor.setProperty("--color-background", "#fff");
      textColor.setProperty("--color-text", "#000");
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
      </Helmet>
      <Hero language={language} languageToUse={languageToUse} />
      <About
        language={language}
        languageToUse={languageToUse}
        darkMode={darkMode}
      />
      <Projects
        language={language}
        languageToUse={languageToUse}
        darkMode={darkMode}
      />
      <Contact language={language} languageToUse={languageToUse} />
      <button onClick={handleDarkMode} className="dark-mode-button">
        {darkMode ? <span> Light-mode</span> : <span> Dark-mode </span>}
      </button>
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
