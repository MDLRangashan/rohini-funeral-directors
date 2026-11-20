import { useLang } from "../../shared/i18n/language";
import AmpersandText from "../../shared/ui/AmpersandText";
import { Emblem, Wordmark } from "../../shared/ui/Brand";
import { Icon } from "../../shared/ui/Icons";
import LangSwitch from "../../shared/ui/LangSwitch";
import SocialLinks from "../../shared/ui/SocialLinks";
import { SectionWave } from "../../shared/ui/Wave";
import { imageSrc } from "../../shared/content/content";

function phoneRows(phones) {
  const rows = [];
  for (let index = 0; index < phones.length; index += 2) {
    rows.push(phones.slice(index, index + 2));
  }
  return rows;
}

export default function Footer({ onPrivacy, onTerms, onSection, edge = "dark" }) {
  const { t } = useLang();

  return (
    <footer className={`footer${edge === "cream" ? " edge-cream" : ""}`} id="contact">
      {edge === "cream" ? <SectionWave place="top" flip /> : null}
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-lockup">
            <Emblem />
            <Wordmark />
          </div>
          <em>{t.tagline}</em>
        </div>
        <div>
          <h2>{t.quickLinks}</h2>
          <ul className="quick-links">
            {t.footerNav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => {
                    if (onSection?.(event, item.id)) event.preventDefault();
                  }}
                >
                  <Icon name="chevron" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{t.contactHeading}</h2>
          {t.branches.map((place) => (
            <div className="footer-line" key={place.id}>
              <Icon name="pin" />
              <div className="footer-place">
                <strong>{place.name}</strong>
                <a className="footer-address" href={place.mapsHref} target="_blank" rel="noopener noreferrer">
                  {place.address.replace(", Maharagama", ",\nMaharagama")}
                </a>
                <div className="footer-phones">
                  {phoneRows(place.phones).map((row) => (
                    <p key={row[0].href}>
                      {row.map((phone, index) => (
                        <span key={phone.href}>
                          {index > 0 ? <span className="sep"> | </span> : null}
                          <a href={phone.href}>{phone.display}</a>
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-connect">
          <h2>{t.stayConnected}</h2>
          <SocialLinks />
          <a className="btn btn-line" href={t.phoneHref}>
            {t.getInTouch}
            <Icon name="arrow" />
          </a>
        </div>
      </div>
      <SectionWave line inline />
      <img className="footer-lily" src={`${imageSrc("hero-lilies.jpg")}?v=2`} alt="" />
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-meta">
            <span>{t.rights}</span>
            <LangSwitch className="lang-switch footer-lang" />
          </p>
          <p className="footer-legal">
            <button type="button" onClick={onPrivacy}>
              {t.privacy}
            </button>
            <span aria-hidden="true">|</span>
            <button type="button" onClick={onTerms}>
              <AmpersandText text={t.terms} />
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
