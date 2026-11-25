export const CAROUSEL_INTERVAL = 6500;
export const SWIPE_THRESHOLD = 48;

export function nextSlide(current: number, direction: number, total: number) {
  return (current + direction + total) % total;
}

export function swipeDirection(start: { x: number; y: number }, end: { x: number; y: number }) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  return Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.2 ? (dx < 0 ? 1 : -1) : 0;
}
