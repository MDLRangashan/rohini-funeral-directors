import { useLang } from "../../shared/i18n/language";
import Brand from "../../shared/ui/Brand";
import { Icon } from "../../shared/ui/Icons";
import LangSwitch from "../../shared/ui/LangSwitch";

export default function Header({ active, menuOpen, setMenuOpen, onSection }) {
  const { t } = useLang();

  const follow = (event, id) => {
    setMenuOpen(false);
    if (onSection?.(event, id)) event.preventDefault();
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <Brand onClick={(event) => follow(event, "home")} />
        <span className="header-rule" aria-hidden="true" />
        <div className="header-tools">
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary">
          {t.headerNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              aria-current={active === item.id ? "true" : undefined}
              onClick={(event) => follow(event, item.id)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-call btn btn-gold" href={t.phoneHref}>
            <Icon name="phone" />
            {t.callUs}
          </a>
            <LangSwitch className="lang-switch nav-lang" />
          </nav>
          <div className="header-actions">
          <a className="btn btn-gold header-call" href={t.phoneHref}>
            <Icon name="phone" />
            <span>{t.callUs}</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.closeMenu : t.menu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
