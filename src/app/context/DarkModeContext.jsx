"use client";
import { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  // step: define the state you want to share
  const [darkMode, setDarkMode] = useState(false);

  // step: wrap children with provider and give them the value
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// helper function to use the context easily
export function useDarkMode() {
  return useContext(DarkModeContext);
}