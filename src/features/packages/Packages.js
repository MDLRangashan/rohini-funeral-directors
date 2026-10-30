import { useState } from "react";
import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { FloralWash, Icon } from "../../shared/ui/Icons";

export default function Packages() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <section className="section wash" id="packages">
      <FloralWash />
      <div className="container split packages-split">
        <div className="split-copy">
          <p className="kicker">{t.packagesKicker}</p>
          <h2>{t.packagesTitle}</h2>
          <p className="lede">{t.packagesText}</p>
          <button
            type="button"
            className="btn btn-line-dark"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.hidePackages : t.viewPackages}
            <Icon name="arrow" />
          </button>
        </div>
        <div className="card-row">
          {t.packages.map((item) => (
            <article className="package-card" key={item.title}>
              <img src={imageSrc(item.image)} alt={item.alt} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {open && <p className="detail">{item.detail}</p>}
                <a href="#contact">{t.contactPricing}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
