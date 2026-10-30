import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { FloralWash, Icon } from "../../shared/ui/Icons";

function enquireHref(base, template, title) {
  try {
    const url = new URL(base);
    url.searchParams.set("text", template.replace("{title}", title));
    return url.toString();
  } catch {
    return base;
  }
}

export default function PackageDetail({ packageId, onBack, onOpen }) {
  const { t } = useLang();
  const item = t.packages.find((pkg) => pkg.id === packageId);

  if (!item) {
    return (
      <section className="section package-screen">
        <div className="container">
          <button type="button" className="text-back" onClick={onBack}>
            <Icon name="arrow" />
            {t.backToPackages}
          </button>
          <p className="lede">{t.packageMissing}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section wash package-screen">
      <FloralWash />
      <div className="container">
        <button type="button" className="text-back" onClick={onBack}>
          <Icon name="arrow" />
          {t.backToPackages}
        </button>
        <div className="package-intro">
          <div className="package-lead">
            <p className="kicker">{t.packagesKicker}</p>
            <h1>{item.title}</h1>
            <p className="lede">{item.text}</p>
            <div className="package-actions">
              <a className="btn btn-gold" href={t.phoneHref}>
                <Icon name="phone" />
                {t.enquirePackage}
              </a>
              <a
                className="btn btn-line-dark"
                href={enquireHref(t.whatsappHref, t.enquireMessage, item.title)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" />
                {t.whatsapp}
              </a>
            </div>
          </div>
          <div className="package-collage" role="group" aria-label={t.packageGallery}>
            {item.photos.map((photo, index) => (
              <button
                key={photo.image}
                type="button"
                className={`collage-shot shot-${index}`}
                onClick={() => onOpen(item.photos, index)}
              >
                <img src={imageSrc(photo.image)} alt={photo.alt} />
                <span>{photo.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="package-points">
          <h2>{t.packageIncludes}</h2>
          <ol className="inclusion-path">
            {item.points.map((point, index) => (
              <li
                key={point.title}
                className={`inclusion-step${point.note ? " is-note" : ""}${index % 2 === 1 ? " is-right" : ""}`}
              >
                <span className="step-mark">
                  <Icon name={point.icon} />
                </span>
                <div className="step-card">
                  <span className="step-index">
                    {point.note ? t.notedSeparately : String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
