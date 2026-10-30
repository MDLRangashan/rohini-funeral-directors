import { useEffect } from "react";
import { useLang } from "../../shared/i18n/language";

export default function Privacy({ open, onClose }) {
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
        <h2 id="privacy-title">{t.privacyTitle}</h2>
        <p>{t.privacyBody}</p>
        <button type="button" className="btn btn-gold" onClick={onClose}>
          {t.close}
        </button>
      </div>
    </div>
  );
}
