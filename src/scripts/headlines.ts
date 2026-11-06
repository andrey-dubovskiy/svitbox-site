// Big headlines land like a punch when they scroll into view.
// They stay fully visible at rest; only headlines below the first screen animate.
import { reduce } from './motion';

if (!reduce) {
  const heads = document.querySelectorAll<HTMLElement>('[data-punch]');
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    io.unobserve(en.target);
    (en.target as HTMLElement).animate([
      { transform: 'translateX(-9%) skewX(-16deg)', filter: 'blur(6px)' },
      { transform: 'translateX(1.2%) skewX(4deg)', filter: 'blur(0)', offset: .55 },
      { transform: 'translateX(-.4%) skewX(-1deg)', offset: .8 },
      { transform: 'none', filter: 'blur(0)' },
    ], { duration: 620, easing: 'cubic-bezier(.2,.9,.2,1)' });
  }), { rootMargin: '0px 0px -18% 0px' });
  heads.forEach((h) => { if (h.getBoundingClientRect().top > innerHeight) io.observe(h); });
}
