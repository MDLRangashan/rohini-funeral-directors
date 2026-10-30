import { useState } from "react";
import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { LeafSprig } from "../../shared/ui/Icons";

export default function About() {
  const { t } = useLang();
  const [more, setMore] = useState(false);

  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <img
          className="about-photo"
          src={imageSrc("about-hearse.jpg")}
          alt={t.aboutAlt}
        />
        <div>
          <p className="kicker">{t.aboutKicker}</p>
          <h2>{t.aboutTitle}</h2>
          <p className="lede">{t.aboutText}</p>
          {more && <p className="lede about-more">{t.aboutMore}</p>}
          <button
            type="button"
            className="btn btn-gold"
            aria-expanded={more}
            onClick={() => setMore((open) => !open)}
          >
            {more ? t.showLess : t.learnMore}
          </button>
        </div>
        <aside className="quote-panel">
          <LeafSprig className="sprig" />
          <p>“{t.heroQuote}”</p>
        </aside>
      </div>
    </section>
  );
}
