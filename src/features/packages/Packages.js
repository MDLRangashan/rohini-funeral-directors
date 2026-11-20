import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { Icon } from "../../shared/ui/Icons";

export default function Packages() {
  const { t } = useLang();

  return (
    <section className="packages-section" id="packages" aria-labelledby="packages-title">
      <div className="container">
        <div className="section-head">
          <p className="kicker">{t.packagesTitle}</p>
          <h1 id="packages-title">{t.packagesKicker}</h1>
          <p className="packages-intro">{t.packagesIntro}</p>
        </div>
        <div className="package-grid">
          {t.packageOffers.map((offer) => (
            <article className={`package-card${offer.premium ? " is-premium" : ""}`} key={offer.id}>
              <img src={imageSrc(offer.image)} alt={offer.alt} />
              <div className="package-body">
                <div className="package-tiers">
                  {offer.tiers.map((tier) => (
                    <span className="package-tier" key={tier}>
                      {tier}
                    </span>
                  ))}
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
                <p className="package-includes">{offer.includes}</p>
                <ul className="package-items">
                  {offer.items.map((item) => (
                    <li key={item.label}>
                      <Icon name={item.icon} />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
                {offer.vip ? (
                  <p className="package-vip">
                    <Icon name="star" />
                    <span>{offer.vip}</span>
                  </p>
                ) : null}
                <div className="package-extras">
                  <p className="package-extras-label">
                    {offer.premium ? t.packageExtrasIncluded : t.packageExtrasLabel}
                  </p>
                  <ul>
                    {t.packageExtras.map((extra) => (
                      <li key={extra.title}>
                        <Icon name={extra.icon} />
                        <div>
                          <h3>{extra.title}</h3>
                          <p>{offer.premium ? extra.included : extra.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
