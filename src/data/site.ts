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
  hours: ['Щодня 7:00–22:00'],
  email: 'svitbox2012@gmail.com',
  messengers: {
    telegram: '#',
    viber: '#',
  },
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
    query: 'Бровари, вулиця Героїв України, 30, спорткомплекс Манеж',
    hours: 'Щодня 7:00–22:00',
    notes: ['Є паркування'],
    find: '[як знайти вхід: орієнтир, поверх]',
  },
];
