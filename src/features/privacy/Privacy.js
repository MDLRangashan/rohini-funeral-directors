import { useEffect } from "react";
import { useLang } from "../../shared/i18n/language";
import AmpersandText from "../../shared/ui/AmpersandText";

export default function Privacy({ open, onClose, title, body }) {
  const { t } = useLang();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="privacy" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
      <button type="button" className="lightbox-backdrop" aria-label={t.close} onClick={onClose} />
      <div className="privacy-card">
        <h2 id="privacy-title">
          <AmpersandText text={title || t.privacyTitle} />
        </h2>
        <p>{body || t.privacyBody}</p>
        <button type="button" className="btn btn-gold" onClick={onClose}>
          {t.close}
        </button>
      </div>
    </div>
  );
}
