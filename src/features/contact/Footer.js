import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { Icon } from "../../shared/ui/Icons";
import SocialLinks from "../../shared/ui/SocialLinks";

export default function Footer({ onPrivacy, onSection }) {
  const { t } = useLang();

  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="brand-mark" src={imageSrc("logo.jpg")} alt="" />
          <strong>ROHINI</strong>
          <small>{t.brandSub}</small>
          <em>{t.tagline}</em>
        </div>
        <div>
          <h2>{t.quickContact}</h2>
          <ul className="contact-list">
            <li>
              <Icon name="phone" />
              <a href={t.phoneHref}>{t.phone}</a>
            </li>
            <li>
              <Icon name="mail" />
              <a href={t.emailHref}>{t.email}</a>
            </li>
            {t.branches.map((place) => (
              <li key={place.id}>
                <Icon name="pin" />
                <span>
                  <strong className="branch-name">{place.name}</strong>
                  <span className="branch-label">{place.label}</span>
                  {place.address}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{t.openingHours}</h2>
          <p className="hours">
            <Icon name="clock" />
            <span>
              <strong>{t.hours}</strong>
              {t.hoursNote}
            </span>
          </p>
        </div>
        <div className="footer-maps">
          {t.branches.map((place) => (
            <div className="map-card" key={place.id}>
              <iframe title={place.name} src={place.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="map-chip">
                <Icon name="pin" />
                <span>{place.label}</span>
              </div>
              <a href={place.mapsHref} target="_blank" rel="noopener noreferrer">
                {t.viewMap}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>{t.rights}</p>
          <nav aria-label="Footer">
            {t.footerNav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => {
                  if (onSection?.(event, item.id)) event.preventDefault();
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-end">
            <SocialLinks />
            <button type="button" onClick={onPrivacy}>
              {t.privacy}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
