import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

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
      {/* <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      /> */}
      <section className="main">{childrenWithProps}</section>

      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Layout;
