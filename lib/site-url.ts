export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  if (explicit) {
    return explicit;
  }

  return "https://madebysebi.com";
}
