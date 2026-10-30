import { imageSrc } from "../content/content";

export default function Brand({ sub }) {
  return (
    <a className="brand" href="#home">
      <img className="brand-mark" src={imageSrc("logo.jpg")} alt="" />
      <span>
        <strong>ROHINI</strong>
        <small>{sub}</small>
      </span>
    </a>
  );
}
