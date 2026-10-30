import { useLang } from "../../shared/i18n/language";
import { FloralWash, Icon } from "../../shared/ui/Icons";

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="section wash" id="testimonials">
      <FloralWash />
      <div className="container split">
        <div className="split-copy">
          <p className="kicker">{t.storiesKicker}</p>
          <h2>{t.storiesTitle}</h2>
          <p className="lede">{t.storiesText}</p>
        </div>
        <div className="card-row stories">
          {t.stories.map((story) => (
            <blockquote className="story-card" key={story.name}>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>{story.quote}</p>
              <div className="stars" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Icon key={star} name="star" />
                ))}
              </div>
              <footer>
                <cite>{story.name}</cite>
                <span>({story.role})</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
