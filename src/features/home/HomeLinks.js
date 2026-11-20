import { useLang } from "../../shared/i18n/language";
import { Icon } from "../../shared/ui/Icons";

export default function HomeLinks() {
  const { t } = useLang();

  return (
    <section className="home-links" aria-label={t.homeLinksLabel}>
      <div className="container home-links-grid">
        {t.homeCards.map((card) => (
          <a className="home-link" href={`#${card.id}`} key={card.id}>
            <span className="home-link-icon">
              <Icon name={card.icon} />
            </span>
            <span className="home-link-body">
              <strong>{card.title}</strong>
              <span>{card.text}</span>
            </span>
            <span className="btn btn-gold home-link-btn">
              {card.action}
              <Icon name="arrow" />
            </span>
            <Icon name="chevron" className="home-link-chevron" />
          </a>
        ))}
      </div>
    </section>
  );
}
