import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);

export function useLang() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLang must be used within LanguageContext");
  }
  return value;
}
