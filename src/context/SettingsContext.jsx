import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useLocation } from "react-router-dom";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const location = useLocation();
  const pageKey = `settings_${location.pathname}`;

  const [settings, setSettings] = useLocalStorage(pageKey, {
    globalFontScale: 1,
    headerFontScale: 1,
    bodyFontScale: 1,
    bodyValueScale: 1,
    gaugeScale: 1,
    gaugeValueScale: 1,
    paddingHorizontal: 1,
    paddingVertical: 1,
    marginHorizontal: 1,
    marginVertical: 1,
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
