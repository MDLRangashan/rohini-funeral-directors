import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { FloralWash, Icon } from "../../shared/ui/Icons";

export default function Packages({ onOpen }) {
  const { t } = useLang();

  return (
    <section className="section wash" id="packages">
      <FloralWash />
      <div className="container split packages-split">
        <div className="split-copy">
          <p className="kicker">{t.packagesKicker}</p>
          <h2>{t.packagesTitle}</h2>
          <p className="lede">{t.packagesText}</p>
        </div>
        <div className="card-row">
          {t.packages.map((item) => (
            <article className="package-card" key={item.id}>
              <button type="button" className="package-open" onClick={() => onOpen(item.id)}>
                <img src={imageSrc(item.image)} alt={item.alt} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="package-more">
                    {t.viewDetails}
                    <Icon name="arrow" />
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
