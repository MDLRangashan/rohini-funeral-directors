import { imageSrc } from "../content/content";

export default function Brand({ sub, onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick}>
      <img className="brand-mark" src={imageSrc("logo.jpg")} alt="" />
      <span>
        <strong>ROHINI</strong>
        <small>{sub}</small>
      </span>
    </a>
  );
}
