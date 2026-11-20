import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";

import { socials } from "@/content/site";

const icons = {
  Instagram: RiInstagramLine,
  Facebook: RiFacebookFill,
  "X (Twitter)": RiTwitterXFill,
  LinkedIn: RiLinkedinFill,
};

const SocialLinks = ({ className = "", tone = "light" }) => {
  const ring =
    tone === "dark"
      ? "text-white ring-white/25 hover:bg-white hover:text-harbor"
      : "text-brand ring-harbor/15 hover:bg-harbor hover:text-white";

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.filter(({ href }) => href).map(({ name, href }) => {
        const Icon = icons[name];
        return (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`RDR Solutions on ${name}`}
              className={`flex h-11 w-11 items-center justify-center rounded-full ring-1 transition-colors ${ring}`}
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
