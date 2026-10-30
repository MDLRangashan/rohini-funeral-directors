import { useLang } from "../../shared/i18n/language";
import Brand from "../../shared/ui/Brand";
import { Icon } from "../../shared/ui/Icons";

export default function Header({ active, menuOpen, setMenuOpen }) {
  const { t } = useLang();

  return (
    <header className="header">
      <div className="container header-inner">
        <Brand sub={t.brandSub} />
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary">
          {t.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              aria-current={active === item.id ? "true" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-gold header-call" href={t.phoneHref}>
            <Icon name="phone" />
            <span>{t.callNow}</span>
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
    </header>
  );
}
