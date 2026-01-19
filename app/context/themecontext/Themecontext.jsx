'use client'
import React, { createContext,  useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  const clickFunction = () => {
    console.log("Your Theme context is working perfectly");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, clickFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};


export default ThemeProvider;