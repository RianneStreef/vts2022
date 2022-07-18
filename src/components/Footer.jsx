import React from "react";

import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/Footer.css";

import Copyright from "../components/Copyright";

const Footer = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div className="footer">
      <div className="menu-placeholder" />
      <Copyright language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default Footer;
