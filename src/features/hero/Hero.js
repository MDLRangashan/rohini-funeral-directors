import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { Icon } from "../../shared/ui/Icons";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${imageSrc("hero.jpg")})` }}
    >
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="kicker light">{t.heroKicker}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-text">{t.heroText}</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href={t.phoneHref}>
              <Icon name="phone" />
              {t.callNow}
            </a>
            <a
              className="btn btn-line"
              href={t.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" />
              {t.whatsapp}
            </a>
            <a className="btn btn-line" href="#services">
              <Icon name="flower" />
              {t.ourServices}
            </a>
          </div>
          <ul className="feature-row">
            {t.features.map((feature) => (
              <li key={feature.label}>
                <Icon name={feature.icon} />
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="hero-quote">“{t.heroQuote}”</p>
    </section>
  );
}
