import React from "react";
import { Link } from "gatsby";

import "../styles/Options.css";
import { content } from "../content/languages";

import MoreInfo from "../components/MoreInfo";

const Options = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="options" id="options">
      <p className="intro-text">{languageToUse.optionsIntro}</p>
      {darkMode ? (
        <div className="services">
          <div className="service">
            <lord-icon
              src="https://cdn.lordicon.com/fetyzpiw.json"
              trigger="hover"
              className="service-icon"
              colors="primary:#b59b7c"
              style={{ width: "100px", height: "100px" }}
            />
            <p>{languageToUse.optionBasic}</p>
            <MoreInfo
              path={"/formulas#basic"}
              language={language}
              languageToUse={languageToUse}
              darkMode={darkMode}
            />
          </div>
          <div className="service">
            <lord-icon
              src="https://cdn.lordicon.com/giaigwkd.json"
              trigger="hover"
              className="service-icon"
              colors="primary:#b59b7c"
              style={{ width: "100px", height: "100px" }}
            />
            <p>{languageToUse.optionsPersonalized}</p>
            <MoreInfo
              path={"/formulas#personalized"}
              language={language}
              languageToUse={languageToUse}
              darkMode={darkMode}
            />
          </div>
          <div className="service">
            <lord-icon
              src="https://cdn.lordicon.com/sihdhmit.json"
              trigger="hover"
              className="service-icon"
              colors="primary:#b59b7c"
              style={{ width: "100px", height: "100px" }}
            />
            <p>{languageToUse.optionAllIn}</p>

            <MoreInfo
              path={"/formulas#all-in"}
              language={language}
              languageToUse={languageToUse}
              darkMode={darkMode}
            />
          </div>
        </div>
      ) : (
        <div className="services">
          <div className="service">
            <lord-icon
              src="https://cdn.lordicon.com/fetyzpiw.json"
              trigger="hover"
              className="service-icon"
              colors="primary:#b59b7c"
              style={{ width: "100px", height: "100px" }}
            />
            <p>{languageToUse.optionBasic}</p>
            <MoreInfo
              path={"/formulas#basic"}
              language={language}
              languageToUse={languageToUse}
              darkMode={darkMode}
            />
          </div>
          <div className="service">
            <lord-icon
              src="https://cdn.lordicon.com/giaigwkd.json"
              trigger="hover"
              className="service-icon"
              colors="primary:#b59b7c"
              style={{ width: "100px", height: "100px" }}
            />
            <p>{languageToUse.optionsPersonalized}</p>
            <MoreInfo
              path={"/formulas#personalized"}
              language={language}
              languageToUse={languageToUse}
              darkMode={darkMode}
            />
          </div>
          <div className="service">
            <lord-icon
              src="https://cdn.lordicon.com/sihdhmit.json"
              trigger="hover"
              className="service-icon"
              colors="primary:#b59b7c"
              style={{ width: "100px", height: "100px" }}
            />
            <p>{languageToUse.optionAllIn}</p>
            <MoreInfo
              path={"/formulas#all-in"}
              language={language}
              languageToUse={languageToUse}
              darkMode={darkMode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Options;
