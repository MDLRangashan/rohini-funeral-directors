function lotusPetal(angle, len, half) {
  const tip = (12 - len).toFixed(2);
  const y1 = (12 - len * 0.4).toFixed(2);
  const y2 = (12 - len * 0.76).toFixed(2);
  const xL = (12 - half).toFixed(2);
  const xR = (12 + half).toFixed(2);
  const xLi = (12 - half * 0.22).toFixed(2);
  const xRi = (12 + half * 0.22).toFixed(2);
  return (
    <path
      key={angle}
      d={`M12 12C${xLi} ${y1} ${xL} ${y2} 12 ${tip}C${xR} ${y2} ${xRi} ${y1} 12 12Z`}
      transform={`rotate(${angle} 12 12)`}
    />
  );
}

function LotusIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {[0, 90, 180, 270].map((angle) => lotusPetal(angle, 7.2, 2.7))}
      {[45, 135, 225, 315].map((angle) => lotusPetal(angle, 9.2, 4.15))}
      <circle cx="12" cy="12" r="1.2" />
    </svg>
  );
}

export function Icon({ name, className }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path d="M7 3.8h2.6l1.3 3.2-1.8 1.1a12.2 12.2 0 0 0 5.8 5.8l1.1-1.8 3.2 1.3V16a1.8 1.8 0 0 1-2 1.8A14.2 14.2 0 0 1 4.2 6.8 1.8 1.8 0 0 1 6 4.8" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M6 18.5 4.6 21l2.7-.7A8.2 8.2 0 1 0 6 18.5z" />
          <path d="M9.2 8.7c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4.2.5.6 1.6.6 1.7.1.2 0 .4-.2.6l-.3.4c-.1.2-.2.3 0 .6.3.5.9 1.4 1.9 1.9.3.2.5.1.6 0l.5-.5c.2-.2.4-.1.6 0 .2.1 1.3.6 1.5.7.2.1.3.2.2.5-.1.4-.7 1.1-1.2 1.2-.4.1-.8.2-2.3-.3-1.3-.5-2.6-1.6-3.5-3-.7-1.1-1.1-2.1-.9-2.8.1-.3.3-.5.4-.6z" />
        </svg>
      );
    case "care":
      return (
        <svg {...common}>
          <path d="M12 19s-6.2-3.7-6.2-8A3.4 3.4 0 0 1 12 8.6 3.4 3.4 0 0 1 18.2 11c0 4.3-6.2 8-6.2 8z" />
        </svg>
      );
    case "professional":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="2.4" />
          <path d="M6.8 18.2c.6-2.4 2.6-3.7 5.2-3.7s4.6 1.3 5.2 3.7" />
          <path d="M16.2 6.2 17.6 7.6 20 5.2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7.2" />
          <path d="M12 8.2V12l2.6 1.8" />
        </svg>
      );
    case "arrange":
      return <LotusIcon className={className} />;
    case "car":
      return (
        <svg className={className} viewBox="0 0 54 34" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5 23V17.2H8.5L14.5 16H19.5L26 8.5H36.5L43 16H45.5V17.2H49V23H5ZM24.2 11H28.4V16H20.4L24.2 11ZM30.2 11H35L39 16H30.2V11Z"
          />
          <circle cx="15.5" cy="25.2" r="3.6" />
          <circle cx="39" cy="25.2" r="3.6" />
        </svg>
      );
    case "flower":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="7.6" r="2.05" />
          <circle cx="12" cy="3.7" r="2.2" />
          <circle cx="8.35" cy="5.35" r="2.15" />
          <circle cx="15.65" cy="5.35" r="2.15" />
          <circle cx="7.15" cy="8.85" r="2.05" />
          <circle cx="16.85" cy="8.85" r="2.05" />
          <circle cx="9.7" cy="11.15" r="1.95" />
          <circle cx="14.3" cy="11.15" r="1.95" />
          <path d="M10.35 12.7h3.3l.85 2.15H9.5l.85-2.15z" />
          <path d="M8.15 15.15h7.7v2.05c0 .45-.35.8-.8.8H8.95c-.45 0-.8-.35-.8-.8v-2.05z" />
        </svg>
      );
    case "plan":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5 2.2h9.2L19.2 7.4V21.8H5V2.2zm2.4 9h9.2v1.2H7.4v-1.2zm0 2.8h9.2v1.2H7.4v-1.2zm0 2.8h6v1.2h-6v-1.2z"
          />
        </svg>
      );
    case "flame":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 1.3c.7 2.6 2.2 4.1 2.7 6.1.4 1.5-.3 2.7-1.4 3.4 1.5-.6 3.1-1.5 3.7-2.8 1.3 1.8 2.5 3.8 2.5 6.4 0 4.2-3.3 7.6-7.5 7.6S4.5 18.6 4.5 14.4c0-2.8 1.4-5.2 3-7.1.8 2 1.8 3 2 4.6.1-2.4.9-5.6 2.5-10.6z" />
        </svg>
      );
    case "cross":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9.55 2h4.9v5.4h5.7v4.6h-5.7V22h-4.9v-10H3.85V7.4h5.7V2z" />
        </svg>
      );
    case "dining":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M5.1 16.6a6.9 6.9 0 0 1 13.8 0H5.1z" />
          <rect x="11.2" y="7.7" width="1.6" height="2.1" />
          <circle cx="12" cy="7.15" r="1.05" />
          <path d="M3.6 17.4h16.8v1.7H3.6z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 20.2s5.2-4.6 5.2-9a5.2 5.2 0 1 0-10.4 0c0 4.4 5.2 9 5.2 9z" />
          <circle cx="12" cy="11" r="1.6" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3.8" y="5.6" width="16.4" height="12.2" rx="1.6" />
          <path d="m4.4 7 7.6 6 7.6-6" />
        </svg>
      );
    case "star":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="m12 3.4 2.2 4.7 5.2.7-3.8 3.6.9 5.1L12 15.2 7.5 17.5l.9-5.1L4.6 8.8l5.2-.7L12 3.4z"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8.2h2V5.4h-2c-2.2 0-3.6 1.4-3.6 3.6v1.6H8.4V13h2v6h2.6v-6h2.2l.4-2.4h-2.6V9.2c0-.6.3-1 .9-1z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4" />
          <circle cx="12" cy="12" r="3.4" />
          <circle cx="16.6" cy="7.5" r="0.7" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M4.2 8.2A2.2 2.2 0 0 1 6.3 6.4h11.4a2.2 2.2 0 0 1 2.1 1.8c.3 1.6.4 3.3.4 3.8s-.1 2.2-.4 3.8a2.2 2.2 0 0 1-2.1 1.8H6.3a2.2 2.2 0 0 1-2.1-1.8C3.9 14.2 3.8 12.5 3.8 12s.1-2.2.4-3.8z" />
          <path d="m10.4 9.4 4.6 2.6-4.6 2.6z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="m9 5 7 7-7 7" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "coffin":
      return (
        <svg {...common}>
          <path d="M4 10.2 7 7.2h10l3 3v7.2H4v-7.2z" />
          <path d="M4 10.2h16M8.2 13.2h2.2M13.6 13.2h2.2" />
        </svg>
      );
    case "parlour":
      return (
        <svg {...common}>
          <path d="M3.5 10.5 12 4.5l8.5 6" />
          <path d="M6 9.8V19.5h12V9.8" />
          <path d="M10 19.5v-4.2h4v4.2" />
        </svg>
      );
    case "note":
      return (
        <svg {...common}>
          <path d="M7 4.5h7.2L17.5 8v12H7v-15.5z" />
          <path d="M14 4.8V8.2h3.2M9.2 12h5.6M9.2 15h3.6" />
        </svg>
      );
    case "stand":
      return (
        <svg {...common}>
          <path d="M7 15.5h10M8.5 15.5 7 19.5M15.5 15.5 17 19.5" />
          <path d="M6.5 15.5 8.2 8.5h7.6l1.7 7M9 11.2h6" />
        </svg>
      );
    default:
      return null;
  }
}

export function LotusMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 58" fill="none" aria-hidden="true">
      <path
        d="M32 50c-7.2-6.4-13-14.2-13-22.2 0-5 2.8-8.4 6.2-9.6-1.6 4.6-.4 9.2 2.4 12.2C25.2 22 26.2 14.2 32 8c5.8 6.2 6.8 14 4.4 22.4 2.8-3 4-7.6 2.4-12.2 3.4 1.2 6.2 4.6 6.2 9.6C45 35.8 39.2 43.6 32 50z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M32 48c-2.4-8.6-2.2-16.4 0-24M24.2 31.2c2.6-4.6 5.2-7.6 7.8-9.4M39.8 31.2c-2.6-4.6-5.2-7.6-7.8-9.4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M32 18.2c1.2 2.2 1.2 2.2 0 4.2-1.2-2-1.2-2 0-4.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LeafSprig({ className }) {
  return (
    <svg className={className} viewBox="0 0 88 64" fill="none" aria-hidden="true">
      <path
        d="M44 58c0-16 0-28 0-40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M44 46c-8-2-16-10-18-20 8 2 14 8 18 16zM44 38c8-4 16-8 22-8-2 10-10 16-22 18z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M44 28c-6-6-8-14-6-20 6 4 10 12 10 18zM44 24c6-8 14-12 20-10-4 8-10 14-16 16z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FloralWash() {
  const petals = [0, 60, 120, 180, 240, 300];
  const blooms = [
    { x: 90, y: 80, s: 1 },
    { x: 210, y: 150, s: 0.72 },
    { x: 1120, y: 90, s: 1.1 },
    { x: 1040, y: 220, s: 0.62 },
    { x: 80, y: 560, s: 0.9 },
    { x: 1140, y: 600, s: 0.8 },
  ];

  return (
    <svg className="floral-wash" viewBox="0 0 1200 680" aria-hidden="true">
      {blooms.map((bloom) => (
        <g
          key={`${bloom.x}-${bloom.y}`}
          transform={`translate(${bloom.x} ${bloom.y}) scale(${bloom.s})`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {petals.map((deg) => (
            <ellipse key={deg} cx="0" cy="-16" rx="7" ry="14" transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="3.2" />
        </g>
      ))}
    </svg>
  );
}
