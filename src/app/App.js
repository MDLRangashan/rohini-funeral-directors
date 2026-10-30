import { useEffect, useMemo, useState } from "react";
import HomePage from "../features/home/HomePage";
import { copy } from "../shared/content/content";
import { LanguageContext } from "../shared/i18n/language";
import "./App.css";

function App() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "si" ? "si" : "en";
    document.title =
      lang === "si"
        ? "රෝහිණී අවමංගල්‍ය අධ්‍යක්ෂකවරු"
        : "Rohini Funeral Directors | Honouring Every Life";
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <LanguageContext.Provider value={value}>
      <HomePage />
    </LanguageContext.Provider>
  );
}

export default App;
