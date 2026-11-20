import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { Icon } from "../../shared/ui/Icons";

export default function About({ onAbout }) {
  const { t } = useLang();

  return (
    <section className="about-section" id="about-intro" aria-labelledby="about-title">
      <div className="container about-teaser">
        <div className="about-copy">
          <p className="kicker">{t.aboutKicker}</p>
          <h2 id="about-title">
            {t.aboutTitle.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p>{t.aboutText}</p>
          <a className="btn btn-line-dark" href="#about" onClick={onAbout}>
            {t.ourStory}
            <Icon name="arrow" />
          </a>
        </div>
        <img className="about-photo" src={imageSrc("about-branch.jpg")} alt={t.aboutTeamAlt} />
        <img className="about-photo about-seal" src={imageSrc("about-seal.jpg")} alt={t.aboutSealAlt} />
      </div>
    </section>
  );
}
