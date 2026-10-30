import { useEffect } from "react";
import { imageSrc } from "../content/content";
import { useLang } from "../i18n/language";
import { Icon } from "./Icons";

export default function Lightbox({ viewer, onClose, onStep }) {
  const { t } = useLang();

  useEffect(() => {
    if (!viewer) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onStep(1);
      if (event.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [viewer, onClose, onStep]);

  if (!viewer) return null;
  const item = viewer.items[viewer.index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title}>
      <button type="button" className="lightbox-backdrop" aria-label={t.close} onClick={onClose} />
      <figure>
        <img src={imageSrc(item.image)} alt={item.alt} />
        <figcaption>
          {item.title}
          <span>
            {viewer.index + 1} / {viewer.items.length}
          </span>
        </figcaption>
      </figure>
      <button type="button" className="lightbox-close" onClick={onClose}>
        {t.close}
      </button>
      <button type="button" className="lightbox-nav prev" aria-label={t.previous} onClick={() => onStep(-1)}>
        <Icon name="chevron" />
      </button>
      <button type="button" className="lightbox-nav next" aria-label={t.next} onClick={() => onStep(1)}>
        <Icon name="chevron" />
      </button>
    </div>
  );
}
