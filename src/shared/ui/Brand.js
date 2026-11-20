import { imageSrc } from "../content/content";
import { useLang } from "../i18n/language";

export function Emblem({ className = "emblem" }) {
  return (
    <span className={className}>
      <img src={imageSrc("logo.jpg")} alt="" />
    </span>
  );
}

export function Wordmark({ className = "brand-text" }) {
  const { t } = useLang();
  const lines = t.brandLines || ["ROHINI", "Funeral Directors", "Maharagama", "Since 1980"];
  const [name, ...rest] = lines;

  return (
    <span className={className}>
      <strong>{name}</strong>
      {rest.map((line) => (
        <small key={line}>{line}</small>
      ))}
    </span>
  );
}

export default function Brand({ onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick}>
      <Emblem />
      <Wordmark />
    </a>
  );
}
