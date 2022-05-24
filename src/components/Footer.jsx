import React from "react";

import { Link } from "gatsby";

import logoFooterWhite from "../images/logo-white.png";

import "../styles/Footer.css";

import Copyright from "../components/Copyright";

const Footer = (props) => {
  let { language, languageToUse, darkMode } = props;

  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-1">
          <img src={logoFooterWhite} className="logo-footer" />
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
          <p className="quote">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eget justo ut nunc mollis fringilla."
          </p>
        </div>
      </div>
      <div className="menu-placeholder" />
      <Copyright language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default Footer;
