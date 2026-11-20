import Link from "next/link";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/services";

export function MeetIcon() {
  return <svg className="ms-meet-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#00832D" d="M3 8.4h4.6v7.2H3z" />
    <path fill="#0066DA" d="M16.4 9.2 21 5.7v12.6l-4.6-3.5z" />
    <path fill="#00AC47" d="M7.6 8.4h8.8v7.2H7.6z" />
    <path fill="#FFBA00" d="M3 8.4 7.6 4h8.8v4.4H3z" />
    <path fill="#EA4335" d="M3 8.4V4h4.6z" />
    <path fill="#2684FC" d="m16.4 9.2 4.6-3.5v12.6l-4.6-3.5z" />
    <path fill="#00832D" d="m3 15.6 4.6 4.4h8.8v-4.4z" />
  </svg>;
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("ms-chat-icon", className)}>
    <path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.42 14.93L2 22l5.22-1.57A9.98 9.98 0 1 0 12.04 2Zm0 17.96a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.93.95-3.02-.2-.31a8.06 8.06 0 1 1 6.83 3.72Zm4.48-6.04c-.25-.12-1.46-.72-1.69-.8-.23-.09-.4-.13-.57.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.04-.39-1.99-1.23a7.46 7.46 0 0 1-1.38-1.71c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.16-.48-.28Z" />
  </svg>;
}

export function BookCallLink({ className }: { className?: string }) {
  return <Link className={cn("ms-book-call", className)} href="/contact?service=Other&intent=call#contact-form"><MeetIcon />Book a free call</Link>;
}

export function ChatLink({ className, label = "Let's chat" }: { className?: string; label?: string }) {
  return <a className={cn("ms-chat-link", className)} href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`${label} on WhatsApp`}><WhatsAppIcon />{label}</a>;
}
