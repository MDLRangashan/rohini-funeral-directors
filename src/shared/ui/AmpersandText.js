import { Fragment } from "react";

export default function AmpersandText({ text }) {
  const parts = String(text ?? "").split("&");
  if (parts.length === 1) return parts[0];

  return parts.map((part, index) => (
    <Fragment key={`${part}-${index}`}>
      {index > 0 ? <span className="ampersand">&</span> : null}
      {part}
    </Fragment>
  ));
}
