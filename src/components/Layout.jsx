import React, { useState, useEffect } from "react";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "";
  let [darkMode, setDarkMode] = useState(true);

  useEffect(() => {}, [darkMode]);

  // let languageInStorage = "";

  // useEffect(() => {
  //   if (localStorage.getItem("languageInStorage")) {
  //     setLanguage(languageInStorage);
  //     console.log("language found");
  //     console.log(languageInStorage);
  //   }
  // }, []);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
      darkMode,
      setDarkMode,
    })
  );
  return (
    <div className="layout">
      <section className="main">{childrenWithProps}</section>
    </div>
  );
};

export default Layout;
