import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import AmpersandText from "../../shared/ui/AmpersandText";
import { Icon } from "../../shared/ui/Icons";
import { LilyArt, SectionWave } from "../../shared/ui/Wave";

function Title({ text }) {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <span key={line}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

export default function Story({ onSection }) {
  const { t } = useLang();

  return (
    <>
      <section className="story-hero" aria-labelledby="story-title">
        <div className="container story-hero-copy">
          <p className="eyebrow">{t.storyKicker}</p>
          <h1 id="story-title">
            <Title text={t.storyTitle} />
          </h1>
          <p className="story-lead">{t.storyLead}</p>
        </div>
        <img className="story-lily" src={`${imageSrc("hero-lilies.jpg")}?v=2`} alt="" />
        <SectionWave place="bottom" />
      </section>

      <section className="history-section">
        <LilyArt className="lily-art" />
        <div className="container history">
          <img src={imageSrc("about-farewell.jpg")} alt={t.aboutAlt} />
          <div className="history-copy">
            <p className="kicker">{t.historyKicker}</p>
            <h2>
              <Title text={t.historyTitle} />
            </h2>
            <p className="history-meta">{t.historyEstablished}</p>
            <p className="history-meta">{t.historyDirector}</p>
            {t.history.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="history-tagline">{t.historyTagline}</p>
            <a className="btn btn-line-dark" href="#services" onClick={(event) => onSection(event, "services")}>
              {t.ourServices}
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>

      <section className="values band" aria-labelledby="values-title">
        <SectionWave place="top" flip />
        <div className="container">
          <div className="section-head">
            <p className="kicker">{t.valuesKicker}</p>
            <h2 id="values-title">{t.valuesTitle}</h2>
          </div>
          <div className="values-row">
            {t.values.map((item) => (
              <article key={item.title}>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <SectionWave place="bottom" />
      </section>

      <section className="commit-section">
        <div className="container commit">
          <img src={`${imageSrc("hero-lilies.jpg")}?v=2`} alt={t.heroAlt} />
          <div className="commit-copy">
            <p className="kicker">{t.teamTitle}</p>
            <h2>{t.commitTitle}</h2>
            <p>{t.teamText}</p>
            <a className="btn btn-line-dark" href="#contact" onClick={(event) => onSection(event, "contact")}>
              {t.contactHeading}
              <Icon name="arrow" />
            </a>
          </div>
          <blockquote className="commit-quote">
            “<AmpersandText text={t.commitQuote} />”
          </blockquote>
        </div>
      </section>
    </>
  );
}
