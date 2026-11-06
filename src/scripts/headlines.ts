// Big headlines slide in once when they reach the screen.
// Headlines below the first screen get their start offset right away (while still out of view),
// so nothing visible snaps when the animation begins. Transform only: text stays readable.
import { reduce } from './motion';

const START = 'translateX(-4%) skewX(-7deg)';

if (!reduce) {
  const heads = [...document.querySelectorAll<HTMLElement>('[data-punch]')]
    .filter((h) => h.getBoundingClientRect().top > innerHeight);

  heads.forEach((h) => { h.style.transform = START; });

  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target as HTMLElement;
    io.unobserve(el);
    el.animate([{ transform: START }, { transform: 'none' }], {
      duration: 1100,
      easing: 'cubic-bezier(.16, 1, .3, 1)',
    });
    el.style.transform = ''; // the animation holds the start pose, so clearing it now causes no jump
  }), { threshold: 0 });

  heads.forEach((h) => io.observe(h));
}
