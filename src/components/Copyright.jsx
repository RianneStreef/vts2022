import React from "react";

import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/Copyright.css";

const Copyright = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="copyright">
      <p>
        Copyright {languageToUse.copyright}{" "}
        <Link to="/legal">{languageToUse.mentionsLegal} </Link>
      </p>
    </div>
  );
};

export default Copyright;
