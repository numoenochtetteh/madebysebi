export function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/233542470922?text=Hello%20MadeBySebi%2C%20I%27d%20like%20to%20discuss%20a%20project.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MadeBySebi on WhatsApp"
      className="group fixed bottom-5 right-5 z-[70] inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-black/10 bg-[#cefa74] px-3.5 text-black shadow-[0_14px_35px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:bottom-6 sm:right-6 sm:h-13 sm:px-4"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 shrink-0 fill-current"
      >
        <path d="M12.04 2a9.84 9.84 0 0 0-8.42 14.93L2 22l5.22-1.57A9.98 9.98 0 1 0 12.04 2Zm0 17.96a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.93.95-3.02-.2-.31a8.06 8.06 0 1 1 6.83 3.72Zm4.48-6.04c-.25-.12-1.46-.72-1.69-.8-.23-.09-.4-.13-.57.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.04-.39-1.99-1.23a7.46 7.46 0 0 1-1.38-1.71c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.16-.48-.28Z" />
      </svg>

      <span className="hidden text-[12px] font-semibold sm:inline">
        WhatsApp
      </span>

      <span className="hidden font-mono text-[9px] tracking-[0.08em] text-black/55 lg:inline">
        054 247 0922
      </span>
    </a>
  );
}
