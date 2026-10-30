import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { Icon } from "../../shared/ui/Icons";

export default function Gallery({ onOpen }) {
  const { t } = useLang();

  return (
    <section className="section band" id="gallery">
      <div className="container split">
        <div className="split-copy">
          <p className="kicker">{t.galleryKicker}</p>
          <h2>{t.galleryTitle}</h2>
          <p className="lede light">{t.galleryText}</p>
          <button type="button" className="btn btn-line" onClick={() => onOpen(t.gallery, 0)}>
            {t.viewGallery}
            <Icon name="arrow" />
          </button>
        </div>
        <div className="gallery-row">
          {t.gallery.map((item, index) => (
            <figure className="media-card" key={item.title}>
              <button type="button" aria-label={item.title} onClick={() => onOpen(t.gallery, index)}>
                <img src={imageSrc(item.image)} alt={item.alt} />
              </button>
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
