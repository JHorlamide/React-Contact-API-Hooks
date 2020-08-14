import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [state, setstate] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee", border: "5px" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555", border: "5px" },
  });

  const toggleThemeHandler = () => {
    setstate({
      ...state,
      isLightTheme: !state.isLightTheme,
    });
  };

  return (
    <ThemeContext.Provider
      value={{ ...state, toggleTheme: toggleThemeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
