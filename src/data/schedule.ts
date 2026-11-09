// Schedule and prices. Source: the club's poster «Графік тренувань».
// Days: 1 = Monday … 5 = Friday. There are no trainings on Saturday and Sunday.

export const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'];
export const daysFull = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця'];

export interface Group {
  id: string;
  name: string;
  meta: string;      // who it is for
  days: number[];
  from: string;
  to: string;
  signup?: string;   // option preselected in the sign-up form
  ages?: [number, number]; // for the age picker; omitted = not matched by age
  note?: string;
}

export interface Track {
  id: string;
  title: string;
  note: string;
  groups: Group[];
}

export const schedule: Track[] = [
  {
    id: 'box',
    title: 'Бокс',
    note: 'Основні групи — понеділок, середа, пʼятниця. У вівторок і четвер — додаткове тренування.',
    groups: [
      { id: 'morning', name: 'Ранковий бокс', meta: 'Усі вікові категорії', days: [1, 3, 5], from: '08:30', to: '09:30', signup: 'morning', ages: [5, 99] },
      { id: 'kids', name: 'Діти', meta: '5–9 років', days: [1, 3, 5], from: '17:00', to: '18:00', signup: 'kids', ages: [5, 9] },
      { id: 'juniors', name: 'Юніори', meta: '10–17 років', days: [1, 3, 5], from: '18:00', to: '19:30', signup: 'juniors', ages: [10, 17] },
      { id: 'adults', name: 'Дорослі', meta: '18+', days: [1, 3, 5], from: '19:30', to: '21:00', signup: 'adults', ages: [18, 99] },
      { id: 'extra', name: 'Додатковий бокс', meta: 'Усі вікові категорії', days: [2, 4], from: '18:00', to: '19:00', ages: [5, 99], note: 'Входить в абонемент «5 разів»' },
    ],
  },
  {
    id: 'fit',
    title: 'Функціональні тренування',
    note: 'Сила, витривалість і рухливість без спарингів. Вівторок і четвер.',
    groups: [
      { id: 'fit-morning', name: 'Ранкова група', meta: 'Функціональні', days: [2, 4], from: '08:30', to: '09:30', signup: 'fit' },
      { id: 'fit-evening', name: 'Вечірня група', meta: 'Функціональні', days: [2, 4], from: '19:00', to: '20:00', signup: 'fit' },
    ],
  },
];

export interface Plan {
  title: string;
  days: string;
  price: number;
  unit: string;
  perSession?: string;
  badge?: string;
}

export const prices: { id: string; title: string; plans: Plan[] }[] = [
  {
    id: 'box',
    title: 'Бокс',
    plans: [
      { title: '3 рази на тиждень', days: 'Пн · Ср · Пт', price: 1800, unit: 'грн / місяць', perSession: '≈ 140 грн за тренування' },
      { title: '5 разів на тиждень', days: 'Пн · Вт · Ср · Чт · Пт', price: 2400, unit: 'грн / місяць', perSession: '≈ 110 грн за тренування', badge: 'Вигідніше' },
    ],
  },
  {
    id: 'fit',
    title: 'Функціональні тренування',
    plans: [
      { title: 'Абонемент', days: 'Вт · Чт', price: 2000, unit: 'грн / місяць', perSession: '≈ 230 грн за тренування' },
      { title: 'Разове заняття', days: 'Вт або Чт', price: 300, unit: 'грн' },
    ],
  },
];

// Not on the poster yet: fill in when the club confirms.
export const otherPrices = [
  { title: 'Пробне тренування', price: '[уточнити]' },
  { title: 'Індивідуальне тренування', price: '[уточнити]' },
];

export const rules = [
  { icon: 'doc', title: 'Довідка від лікаря', text: 'Форма 086/о. Потрібна для всіх, хто тренується.' },
  { icon: 'bag', title: 'Що взяти з собою', text: 'Спортивну форму, змінне взуття, рушник і пляшку води.' },
  { icon: 'card', title: 'Оплата', text: 'Готівкою або на картку.' },
  { icon: 'cal', title: 'Строк абонемента', text: 'Один місяць з дати першого відвідування.' },
];

// Options in the sign-up form: the groups from the schedule, plus individual training.
export const signupOptions = [
  { id: 'morning', chip: 'Ранковий бокс' },
  { id: 'kids', chip: 'Діти 5–9' },
  { id: 'juniors', chip: 'Юніори 10–17' },
  { id: 'adults', chip: 'Дорослі 18+' },
  { id: 'fit', chip: 'Функціональні' },
  { id: 'solo', chip: 'Індивідуально' },
];
export const signupDefault = 'kids';

// Banner on the schedule page for holidays, tournaments and other changes. Empty = hidden.
// Example: 'З 1 по 3 січня тренувань немає. З 4 січня — за звичайним розкладом.'
export const scheduleNotice = '';

// "Didn't find your group?" cards on the schedule page.
export const otherGroups = [
  { title: 'Дівчатам', text: '[уточнити: у яких групах тренуються дівчата — разом за віком чи окремо]', signup: 'adults' },
  { title: 'Індивідуально', text: 'Час — за домовленістю з тренером, у будь-який день. Ціна [уточнити].', signup: 'solo' },
];
