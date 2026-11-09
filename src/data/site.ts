// Contacts, navigation and links used across the whole site.
// Values in [square brackets] are placeholders and render highlighted in pink.

export const site = {
  name: 'Світ Боксу',
  city: 'Бровари',
  founded: '01.03.2012',
  phone: {
    display: '+38 (073) 721 71 71',
    short: '+38 073 721 71 71',
    tel: '+380737217171',
  },
  address: 'вул. Героїв України, 30',
  hours: ['Пн–Пт, тренування за розкладом'],
  email: 'svitbox2012@gmail.com',
  messengers: {
    telegram: '#',
    viber: '#',
  },
};

// The club's own Google Business profile (not the sports complex). Update the numbers from time to time.
export const google = {
  rating: '4,8',
  count: 46,
  asOf: '09.11.2026',
  name: 'Секція боксу в Броварах - "Світ Боксу"',
  url: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Секція боксу в Броварах "Світ Боксу" Героїв України'),
};

export const mainNav = [
  { label: 'Програми', href: '#programs' },
  { label: 'Клуб', href: '#club' },
  { label: 'Тренери', href: '#coach' },
  { label: 'Чемпіони', href: '#champions' },
  { label: 'Розклад', href: 'rozklad/' },
  { label: 'Ціни', href: 'tsiny/' },
  { label: 'Контакти', href: 'kontakty/' },
];

// Separate pages
export const pages = [
  { label: 'Розклад', href: 'rozklad/', text: 'Групи за віком, дні та час' },
  { label: 'Ціни', href: 'tsiny/', text: 'Абонементи на бокс і функціональні' },
  { label: 'Контакти', href: 'kontakty/', text: 'Адреса залу в Броварах, карта і месенджери' },
];

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/svit_boksu_' },
  { label: 'Facebook', href: 'https://www.facebook.com/groups/svitbox.com.ua' },
  { label: 'YouTube', href: 'https://www.youtube.com/watch?v=Kr37cF81WvM' },
  { label: 'Telegram', href: '#', note: '[посилання]' },
];

// Gym(s). Source: the club's old site (svitbox.com.ua/contact). Confirm before launch.
export const halls = [
  {
    id: 'manezh',
    corner: 'Червоний кут',
    name: 'Спорткомплекс «Манеж»',
    address: 'вул. Героїв України, 30',
    query: 'Секція боксу в Броварах "Світ Боксу", вулиця Героїв України, Бровари',
    notes: ['Є паркування'],
    find: '[як знайти вхід: орієнтир, поверх]',
    getHere: [
      { mode: 'Авто', text: 'Є парковка біля спорткомплексу.', todo: '[де саме паркуватись, вʼїзд]' },
      { mode: 'Громадський транспорт', text: '', todo: '[номери маршруток / автобусів і назва зупинки]' },
      { mode: 'Пішки', text: '', todo: '[орієнтир: від чого йти, скільки хвилин]' },
    ],
    photos: [
      { cap: 'Фасад «Манежу»', brief: 'Будівля з вулиці, щоб упізнати здалеку. Денне світло, горизонт рівно.' },
      { cap: 'Вхід', brief: 'Двері, через які заходити, з вивіскою або табличкою клубу.' },
      { cap: 'Зал', brief: 'Ринг і груші з порогу — що людина побачить, коли зайде.' },
    ],
  },
];

export const visitFaq = [
  { q: 'Чи можна прийти подивитись тренування?', a: '[уточнити: так / за домовленістю з тренером]' },
  { q: 'Чи є роздягальні та душ?', a: '[уточнити]' },
  { q: 'Що робити, якщо запізнююсь?', a: 'Подзвоніть тренеру — підкаже, чи встигнете на розминку.' },
  { q: 'Чи можна батькам бути на тренуванні дитини?', a: '[уточнити]' },
];
