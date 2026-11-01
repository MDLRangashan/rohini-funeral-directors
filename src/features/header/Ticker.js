const LINE = "ROHINI FUNERAL DIRECTORS AND FAREWELL HOME";
const REPEAT = 4;

function Group({ hidden }) {
  return (
    <div className="ticker-group" aria-hidden={hidden || undefined}>
      {Array.from({ length: REPEAT }, (_, index) => (
        <span className="ticker-item" key={index}>
          {LINE}
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker">
      <p className="ticker-label">{LINE}</p>
      <div className="ticker-track" aria-hidden="true">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
