import { socials } from "../content/content";
import { Icon } from "./Icons";

export default function SocialLinks() {
  return (
    <div className="socials">
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
        >
          <Icon name={item.name.toLowerCase()} />
        </a>
      ))}
    </div>
  );
}
