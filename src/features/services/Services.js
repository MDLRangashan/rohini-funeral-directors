import { useLang } from "../../shared/i18n/language";
import { FloralWash, Icon } from "../../shared/ui/Icons";

export default function Services() {
  const { t } = useLang();

  return (
    <section className="section wash" id="services">
      <FloralWash />
      <div className="container">
        <div className="section-head center">
          <p className="kicker">{t.servicesKicker}</p>
          <h2>{t.servicesTitle}</h2>
          <p className="lede">{t.servicesText}</p>
        </div>
        <div className="service-grid">
          {t.services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon">
                <Icon name={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
