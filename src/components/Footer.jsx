import React from "react";

import { Link } from "gatsby";

import { content } from "../content/languages";

import logoFooterWhite from "../images/logo-white-no-tag.png";
import logoFooterBlack from "../images/logo-no-tag.png";

import "../styles/Footer.css";

import Copyright from "../components/Copyright";

const Footer = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-1">
          {darkMode ? (
            <img src={logoFooterWhite} className="logo-footer" />
          ) : (
            <img src={logoFooterBlack} className="logo-footer" />
          )}
        </div>
        <div className="footer-2">
          {/* <ul className="link-list">
            <li>
              <Link>Partner 1</Link>
              <Link>Partner 2</Link>
              <Link>Partner 3</Link>
              <Link>Partner 4</Link>
            </li>
          </ul> */}
          <p className="quote">{languageToUse.quote}</p>
        </div>
      </div>
      <div className="menu-placeholder" />
      <Copyright language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default Footer;
