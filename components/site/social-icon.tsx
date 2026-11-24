import { Facebook, Instagram, Linkedin } from "lucide-react";

type SocialName = "LinkedIn" | "Instagram" | "X" | "Facebook";

export function SocialIcon({ name, onDark = false }: { name: SocialName; onDark?: boolean }) {
  switch (name) {
    case "LinkedIn":
      return <Linkedin size={17} strokeWidth={2.2} color="#0a66c2" aria-hidden="true" />;
    case "Instagram":
      return <Instagram size={17} strokeWidth={2.2} color="#e1306c" aria-hidden="true" />;
    case "Facebook":
      return <Facebook size={17} strokeWidth={2.2} color="#1877f2" aria-hidden="true" />;
    case "X":
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: onDark ? "#fff" : "#111" }}>
        <path d="M3 2.5h4.1L21 21.5h-4.1L3 2.5ZM21 2.5 3 21.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>;
  }
}
