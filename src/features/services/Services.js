import { imageSrc } from "../../shared/content/content";
import { useLang } from "../../shared/i18n/language";
import { SectionWave } from "../../shared/ui/Wave";

function ServiceGlyph({ name }) {
  const stroke = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.45,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "car") {
    return (
      <svg {...stroke} viewBox="0 0 72 46">
        <path d="M6 32.5h60" />
        <path d="M12 32.5v-5.5h6.2l7.2-11h17.2l7.4 9.4H56a6 6 0 0 1 6 5.6v1.5" />
        <path d="M27.2 16.2 31 9h12.4l4.2 7.2" />
        <path d="M30.5 16.2h14" />
        <circle cx="24" cy="32.5" r="5.1" />
        <circle cx="52.5" cy="32.5" r="5.1" />
        <circle cx="24" cy="32.5" r="1.7" fill="currentColor" stroke="none" />
        <circle cx="52.5" cy="32.5" r="1.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "people") {
    return (
      <svg {...stroke}>
        <circle cx="24" cy="22" r="6.2" />
        <path d="M11 50c1.2-10 5.2-15.2 13-15.2S35.8 40 37 50" />
        <circle cx="42" cy="24" r="5.4" />
        <path d="M31.5 50c1-9 4.6-13.4 10.6-13.4S52.2 41 53.2 50" />
      </svg>
    );
  }

  if (name === "always") {
    return (
      <svg {...stroke}>
        <path d="M32 13.5a18.5 18.5 0 1 1-13.2 5.6" />
        <path d="M16.2 10.2V19h8.6" />
        <text
          x="32"
          y="37.5"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          fontSize="13"
          fontFamily="Montserrat, sans-serif"
          fontWeight="600"
        >
          24/7
        </text>
      </svg>
    );
  }

  if (name === "catering") {
    return (
      <svg {...stroke}>
        <path d="M20 25h18v12.2a7.6 7.6 0 0 1-7.6 7.6h-2.8a7.6 7.6 0 0 1-7.6-7.6V25z" />
        <path d="M38 29h6.2a4.8 4.8 0 0 1 0 9.6H38" />
        <path d="M16 51h28" />
        <path d="M19 51c1.6 2.4 5.2 3.8 11 3.8s9.4-1.4 11-3.8" />
        <path d="M26.5 19.5c.7-2.6.2-4.6-1.4-6.4" />
        <path d="M33 19.5c.7-2.6.2-4.6-1.4-6.4" />
      </svg>
    );
  }

  if (name === "flower") {
    return (
      <svg {...stroke}>
        <path d="M32 38c0-8 4.2-14 4.2-14S40 32 32 38z" />
        <path d="M32 38c0-8-4.2-14-4.2-14S24 32 32 38z" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse key={angle} cx="32" cy="18" rx="6.4" ry="11.5" transform={`rotate(${angle} 32 32)`} />
        ))}
        <circle cx="32" cy="32" r="3.4" />
        <circle cx="32" cy="32" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg {...stroke}>
      {Array.from({ length: 12 }).map((_, index) => (
        <ellipse
          key={index}
          cx="32"
          cy="15.5"
          rx="2.7"
          ry="12.2"
          transform={`rotate(${index * 30} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="3.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Services({ onOpen }) {
  const { t } = useLang();
  const lily = `${imageSrc("hero-lilies.jpg")}?v=2`;

  return (
    <section className="services band" id="services" aria-labelledby="services-title">
      <SectionWave place="top" flip />
      <img className="edge-lily edge-lily-left" src={lily} alt="" />
      <img className="edge-lily edge-lily-right" src={lily} alt="" />
      <div className="container">
        <div className="section-head">
          <p className="kicker">{t.servicesKicker}</p>
          <h2 id="services-title">{t.servicesTitle}</h2>
        </div>
        <div className="service-row">
          {t.services.map((service) => {
            const open = service.photos?.length ? () => onOpen(service.photos, 0) : null;
            const Tag = open ? "button" : "article";
            return (
              <Tag
                className="service-card"
                key={service.title}
                {...(open ? { type: "button", onClick: open, "aria-label": service.title } : {})}
              >
                <ServiceGlyph name={service.icon} />
                <h3>{service.title}</h3>
              </Tag>
            );
          })}
          <p className="service-aside">{t.servicesAside}</p>
        </div>
      </div>
      <SectionWave place="bottom" />
    </section>
  );
}
