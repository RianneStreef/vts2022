import React from "react";

import { Link } from "gatsby";

import { content } from "../content/languages";

import footerImg from "../images/LOGO-FR.svg";
import footerImgWhite from "../images/LOGO-FR-White.svg";
import footerImgEn from "../images/LOGO-EN.svg";
import footerImgEnWhite from "../images/LOGO-EN-White.svg";
import "../styles/Copyright.css";

const Copyright = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="copyright">
      {darkMode ? (
        <div className="footer-image-container">
          {language === "french" ? (
            <img src={footerImgWhite} className="footer-image" />
          ) : (
            <img src={footerImgEnWhite} className="footer-image" />
          )}
        </div>
      ) : (
        <div className="footer-image-container">
          {language === "french" ? (
            <img src={footerImg} className="footer-image" />
          ) : (
            <img src={footerImgEn} className="footer-image" />
          )}
        </div>
      )}{" "}
      <p>
        Copyright {languageToUse.copyright}{" "}
        <Link to="/legal">{languageToUse.mentionsLegal} </Link>
      </p>
    </div>
  );
};

export default Copyright;
