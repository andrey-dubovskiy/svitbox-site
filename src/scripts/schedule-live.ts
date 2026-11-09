// Kyiv-time helpers and live highlighting of the schedule tables.
export function kyivNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Kyiv', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)!.value;
  const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(get('weekday')) + 1; // 1..7
  const h = +get('hour') % 24, m = +get('minute');
  return { day, min: h * 60 + m, hhmm: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}` };
}

export const toMin = (t: string) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };

// Marks today's column, the training on now (.live) and the next one today (.next).
export function highlight() {
  const { day, min } = kyivNow();
  document.querySelectorAll('.tt [data-day]').forEach((el) => el.classList.toggle('today', +(el as HTMLElement).dataset.day! === day));
  document.querySelectorAll('.tt-tabs [data-tab]').forEach((el) => el.classList.toggle('today', +(el as HTMLElement).dataset.tab! === day));
  const cells = [...document.querySelectorAll<HTMLElement>('[data-from][data-day]')];
  cells.forEach((c) => c.classList.remove('live', 'next'));
  const today = cells.filter((c) => +c.dataset.day! === day);
  today.forEach((c) => { if (toMin(c.dataset.from!) <= min && min < toMin(c.dataset.to!)) c.classList.add('live'); });
  const upcoming = today.filter((c) => toMin(c.dataset.from!) > min);
  const first = Math.min(...upcoming.map((c) => toMin(c.dataset.from!)));
  upcoming.forEach((c) => { if (toMin(c.dataset.from!) === first) c.classList.add('next'); });
  return day;
}

// Day tabs on phones: all tables switch together; opens on today (Monday at the weekend).
export function initTabs(startDay: number) {
  const select = (d: number) => {
    document.querySelectorAll<HTMLElement>('.tt-tabs [data-tab]').forEach((b) => b.setAttribute('aria-selected', String(+b.dataset.tab! === d)));
    document.querySelectorAll<HTMLElement>('.tt-day').forEach((p) => { p.hidden = +p.dataset.panel! !== d; });
  };
  document.querySelectorAll<HTMLElement>('.tt-tabs [data-tab]').forEach((b) => b.addEventListener('click', () => select(+b.dataset.tab!)));
  select(startDay >= 1 && startDay <= 5 ? startDay : 1);
}
