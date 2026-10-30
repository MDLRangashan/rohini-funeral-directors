import { useLang } from "../../shared/i18n/language";
import { Icon } from "../../shared/ui/Icons";
import SocialLinks from "../../shared/ui/SocialLinks";

export default function TopBar() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <a className="assist" href={t.phoneHref}>
          <Icon name="phone" />
          <span className="assist-label">{t.assist}</span>
          <span>{t.phone}</span>
        </a>
        <div className="topbar-tools">
          <SocialLinks />
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "en" ? "on" : ""}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              className={lang === "si" ? "on" : ""}
              aria-pressed={lang === "si"}
              onClick={() => setLang("si")}
            >
              SI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
