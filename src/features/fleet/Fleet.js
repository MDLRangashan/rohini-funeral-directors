import { useState } from "react";
import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { Icon } from "../../shared/ui/Icons";
import useColumns from "./useColumns";

export default function Fleet({ onOpen }) {
  const { t } = useLang();
  const columns = useColumns();
  const [index, setIndex] = useState(0);
  const count = t.fleet.length;
  const visible = Array.from({ length: Math.min(columns, count) }, (_, offset) => {
    return t.fleet[(index + offset) % count];
  });

  const step = (direction) => {
    setIndex((current) => (current + direction + count) % count);
  };

  return (
    <section className="section band" id="fleet">
      <div className="container split">
        <div className="split-copy">
          <p className="kicker">{t.fleetKicker}</p>
          <h2>{t.fleetTitle}</h2>
          <p className="lede light">{t.fleetText}</p>
          <button type="button" className="btn btn-line" onClick={() => onOpen(t.fleet, 0)}>
            {t.viewFleet}
            <Icon name="arrow" />
          </button>
        </div>
        <div className="carousel">
          <button
            type="button"
            className="carousel-btn prev"
            aria-label={t.previous}
            onClick={() => step(-1)}
          >
            <Icon name="chevron" />
          </button>
          <div className="media-row">
            {visible.map((item) => (
              <figure className="media-card" key={item.image + item.title}>
                <button type="button" aria-label={item.title} onClick={() => onOpen(t.fleet, t.fleet.indexOf(item))}>
                  <img src={imageSrc(item.image)} alt={item.alt} />
                </button>
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
          <button
            type="button"
            className="carousel-btn next"
            aria-label={t.next}
            onClick={() => step(1)}
          >
            <Icon name="chevron" />
          </button>
          <div className="dots" role="tablist" aria-label={t.fleetKicker}>
            {t.fleet.map((item, dot) => (
              <button
                key={item.title}
                type="button"
                className={dot === index ? "on" : ""}
                aria-label={item.title}
                aria-pressed={dot === index}
                onClick={() => setIndex(dot)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
