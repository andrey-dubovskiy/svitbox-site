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
  address: '[вулиця, будинок]',
  hours: ['[Пн–Пт 00:00–00:00]', '[Сб 00:00–00:00]'],
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
  { label: 'Події', href: '#life' },
  { label: 'Розклад та ціни', href: '#signup' },
  { label: 'Контакти', href: '#contacts' },
];

// Separate pages (to be built later)
export const pages = [
  { label: 'Розклад', href: '#', text: 'Групи за віком і рівнем, дні та час' },
  { label: 'Ціни', href: '#', text: 'Абонементи і індивідуальні тренування' },
  { label: 'Як дістатись', href: '#', text: 'Адреса залу в Броварах і карта' },
];

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/svit_boksu_' },
  { label: 'Facebook', href: 'https://www.facebook.com/groups/svitbox.com.ua' },
  { label: 'YouTube', href: 'https://www.youtube.com/watch?v=Kr37cF81WvM' },
  { label: 'Telegram', href: '#', note: '[посилання]' },
];
