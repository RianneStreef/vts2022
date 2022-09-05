import React from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

const MoreInfo = (props) => {
  let { language, languageToUse, darkMode, path } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <Link className="more-info" to={path}>
      <span className="more-info-text">{languageToUse.moreInfo}</span>
      <lord-icon
        src="https://cdn.lordicon.com/iifryyua.json"
        trigger="hover"
        className="info-icon"
        colors="primary:#b59b7c"
        style={{ width: "30px", height: "30px" }}
      />
    </Link>
  );
};

export default MoreInfo;
