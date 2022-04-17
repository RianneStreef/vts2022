import React from "react";

import { content } from "../content/languages";

import "../styles/Projects.css";

const Projects = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="projects" id="projects">
      <h2>{languageToUse.projectsTitle}</h2>
    </div>
  );
};

export default Projects;
