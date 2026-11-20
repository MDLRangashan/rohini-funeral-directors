import { useState } from "react";
import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import AmpersandText from "../../shared/ui/AmpersandText";
import { Icon } from "../../shared/ui/Icons";
import { SectionWave } from "../../shared/ui/Wave";

const PAGE_SIZE = 6;

export default function Gallery({ onOpen }) {
  const { t } = useLang();
  const [visible, setVisible] = useState(PAGE_SIZE);
  const photos = t.gallery.slice(0, visible);
  const webPhotos = t.galleryWeb;
  const galleryAll = [...webPhotos, ...t.gallery.filter((item) => !webPhotos.some((web) => web.image === item.image))];
  const openPhoto = (item) => {
    const index = galleryAll.findIndex((photo) => photo.image === item.image);
    onOpen(galleryAll, index < 0 ? 0 : index);
  };
  const hasMore = visible < t.gallery.length;
  const hasLess = visible > PAGE_SIZE;

  const showLess = () => {
    setVisible(PAGE_SIZE);
    requestAnimationFrame(() => {
      const section = document.getElementById("gallery");
      const header = document.querySelector(".site-header");
      if (!section) return;
      const top = section.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight ?? 0);
      window.scrollTo({ top, behavior: "smooth" });
    });
  };
  const stories = t.stories.slice(0, 3);
  const lily = `${imageSrc("hero-lilies.jpg")}?v=2`;

  return (
    <>
      <section className="showcase band" id="gallery" aria-labelledby="gallery-title">
        <SectionWave place="top" flip />
        <div className="container gallery-layout">
          <div className="gallery-copy">
            <p className="kicker">{t.galleryKicker}</p>
            <h2 id="gallery-title">
              <AmpersandText text={t.galleryTitle} />
            </h2>
            <p className="showcase-lead">{t.galleryText}</p>
            <button type="button" className="btn btn-line" onClick={() => openPhoto(galleryAll[0])}>
              {t.viewGallery}
              <Icon name="arrow" />
            </button>
          </div>
          <div className="gallery-photos">
            <div className="gallery-row">
              {webPhotos.map((item) => (
                <button type="button" className="is-web" key={`web-${item.image}`} aria-label={item.title} onClick={() => openPhoto(item)}>
                  <img src={imageSrc(item.image)} alt={item.alt} />
                </button>
              ))}
              {photos.map((item, index) => (
                <button type="button" key={`${item.image}-${index}`} aria-label={item.title} onClick={() => openPhoto(item)}>
                  <img
                    className={item.image === "gallery-vehicles.jpg" ? "is-sheet" : undefined}
                    src={imageSrc(item.image)}
                    alt={item.alt}
                  />
                </button>
              ))}
            </div>
            {(hasMore || hasLess) && (
              <div className="gallery-actions">
                {hasMore && (
                  <button type="button" className="btn btn-line" onClick={() => setVisible((count) => count + PAGE_SIZE)}>
                    {t.showMore}
                  </button>
                )}
                {hasLess && (
                  <button type="button" className="btn btn-line" onClick={showLess}>
                    {t.showLess}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <SectionWave place="bottom" />
      </section>
      <section className="testimonials-band" id="testimonials" aria-labelledby="testimonials-title">
        <img className="testimonials-lily is-left" src={lily} alt="" />
        <img className="testimonials-lily is-right" src={lily} alt="" />
        <div className="container">
          <div className="section-head">
            <p className="kicker">{t.storiesKicker}</p>
            <h2 id="testimonials-title">{t.storiesTitle}</h2>
          </div>
          <div className="testimonial-grid">
            {stories.map((story) => (
              <article className="testimonial-card" key={story.name}>
                <div className="stars" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Icon key={star} name="star" />
                  ))}
                </div>
                <p>“{story.quote}”</p>
                <cite>{story.name}</cite>
                <span>{story.role}</span>
              </article>
            ))}
          </div>
        </div>
        <SectionWave place="bottom" fill="#080808" />
      </section>
    </>
  );
}
