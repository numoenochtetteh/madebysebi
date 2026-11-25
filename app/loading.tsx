export default function Loading() {
  return (
    <main id="main-content" tabIndex={-1}
      aria-live="polite"
      className="min-h-[100dvh] bg-[#f7f6f2] px-6 pb-24 pt-36 text-[#081126]"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/50">
          MadeBySebi
        </span>
        <p className="mt-8 max-w-[650px] text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[1.05] tracking-[-0.05em]">
          Opening your next page.
        </p>
        <p className="mt-5 max-w-[420px] text-sm leading-relaxed text-black/55">
          Just a moment while the page is ready.
        </p>
      </div>
    </main>
  );
}
