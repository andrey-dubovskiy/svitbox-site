// Respect the visitor's "reduce motion" setting everywhere.
export const reduce: boolean =
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

// Ease-out count-up for numbers.
export function countTo(el: HTMLElement, from: number, to: number, ms: number, pad = 0) {
  const t0 = performance.now();
  const fmt = (v: number) => (pad ? String(v).padStart(pad, '0') : String(v));
  if (reduce) { el.textContent = fmt(to); return; }
  (function f(t: number) {
    const k = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(Math.round(from + (to - from) * e));
    if (k < 1) requestAnimationFrame(f);
  })(t0);
}
