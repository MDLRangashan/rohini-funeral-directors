const CREAM = "#f4efe4";

export function SectionWave({
  place = "bottom",
  flip = false,
  fill = CREAM,
  line = false,
  inline = false,
}) {
  const curve = flip
    ? "M0 46C200 14 380 74 580 42C790 8 980 76 1180 40C1310 20 1380 32 1440 36"
    : "M0 26C190 64 390 8 590 36C800 66 990 10 1190 40C1310 54 1380 42 1440 38";
  const curve2 = flip
    ? "M0 58C210 28 400 86 600 54C810 22 1000 88 1200 52C1320 36 1384 46 1440 48"
    : "M0 38C210 74 400 20 600 48C810 76 1000 22 1200 52C1320 64 1384 54 1440 50";
  const fillPath = flip ? `${curve} L1440 0 L0 0 Z` : `${curve} L1440 86 L0 86 Z`;

  return (
    <svg
      className={`section-wave ${inline ? "inline" : place}${line ? " is-line" : ""}`}
      viewBox="0 0 1440 86"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {line ? null : <path d={fillPath} fill={fill} />}
      <path d={curve} fill="none" stroke="#c6a36a" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <path d={curve2} fill="none" stroke="#ead7b0" strokeWidth="1" opacity="0.9" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function LilyArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 220 480" fill="none" aria-hidden="true">
      <g stroke="#c6a15a" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        <path d="M108 470c6-78 2-150-14-230" />
        <path d="M96 390c-36-6-62-34-70-68 28 4 50 24 62 52" />
        <path d="M98 348c34-16 66-16 92-2-22 24-52 34-86 32" />
        <path d="M90 292c-26-28-28-60-8-88 18 20 28 48 24 76" />
        <path d="M100 258c30-32 68-40 98-22-24 30-56 42-90 40" />
        <path d="M86 196c6-42 34-74 74-90-8 34-28 60-54 76" />
        <path d="M104 176c10-46 42-72 82-76-18 32-42 52-72 58" />
        <path d="M94 118c-2-28 16-48 40-58 2 22-6 40-22 54-6-8-12-4-18 4z" />
        <path d="M112 108c18-30 48-42 78-40-8 26-28 42-52 48" />
        <path d="M108 150c-18-34-10-62 16-84 8 28-2 52-16 70" />
        <path d="M108 148c20-32 18-60-2-86-6 30 0 54 16 74" />
        <path d="M108 132c-6-22 2-40 16-52" />
        <path d="M78 168c10 16 20 20 30 16M150 150c-8 14-20 20-32 16" />
        <circle cx="108" cy="96" r="3" fill="#c6a15a" stroke="none" />
      </g>
    </svg>
  );
}
