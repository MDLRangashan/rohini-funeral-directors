import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import AmpersandText from "../../shared/ui/AmpersandText";
import { Icon } from "../../shared/ui/Icons";
import { SectionWave } from "../../shared/ui/Wave";

function Lines({ text }) {
  return String(text || "")
    .split("\n")
    .map((line, index) => <span key={`${line}-${index}`}>{line}</span>);
}

export default function Hero() {
  const { t } = useLang();
  const [first, second] = t.heroTitle.split("\n");
  const lily = `${imageSrc("hero-lilies.jpg")}?v=2`;

  return (
    <section className="hero" id="home" aria-label={t.heroKicker}>
      <div className="hero-glow" aria-hidden="true" />
      <img className="hero-candles" src={lily} alt="" />
      <img className="hero-lily" src={lily} alt="" />
      <img className="hero-building" src={imageSrc("farewell-home.jpg")} alt={t.aboutAlt} />
      <div className="container hero-center">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroKicker}</p>
          <h1>
            <span>{first}</span>
            {second ? (
              <em>
                <AmpersandText text={second} />
              </em>
            ) : null}
          </h1>
          <p className="hero-text">
            <Lines text={t.heroText} />
          </p>
          <a className="btn btn-line" href="#about-intro">
            {t.learnMore}
            <Icon name="arrow" />
          </a>
        </div>
      </div>
      <SectionWave place="bottom" />
    </section>
  );
}
