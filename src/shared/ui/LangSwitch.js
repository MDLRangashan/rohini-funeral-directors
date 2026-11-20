import { useLang } from "../i18n/language";

export default function LangSwitch({ className }) {
  const { lang, setLang } = useLang();

  return (
    <div className={className} role="group" aria-label="Language">
      <button type="button" className={lang === "en" ? "on" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
      <span aria-hidden="true">|</span>
      <button type="button" className={lang === "si" ? "on" : ""} aria-pressed={lang === "si"} onClick={() => setLang("si")}>
        SI
      </button>
    </div>
  );
}
