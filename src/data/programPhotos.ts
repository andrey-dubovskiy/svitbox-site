// Photo slots on program landing pages. Slots with `src` show the club's own photo (alt = what is
// in the frame + the page's key phrase where it reads naturally). Slots without `src` show a brief
// of what still needs shooting. Files: public/img/club/. Gallery sizes: l = big square (2x2),
// t = tall (1x2), w = wide (2x1), n = normal. Keep the cells adding up to a multiple of 4.

export interface Shot { cap: string; brief: string; src?: string; alt?: string; pos?: string; size?: 'l' | 't' | 'w' | 'n' }
const c = (f: string) => `img/club/${f}.jpg`;

export const programPhotos: Record<string, { rounds: Shot[]; gallery: Shot[] }> = {
  dity: {
    rounds: [
      { cap: 'Розминка', brief: 'Діти на розминці: скакалка або ігри, рух і емоції' },
      { cap: 'Техніка', brief: 'Тренер ставить удар', src: c('trenuvannia-03-divchynka-hrusha-trener'), alt: 'Тренер ставить удар дівчинці біля груші на тренуванні з боксу для дітей' },
      { cap: 'Груша й лапи', brief: 'Удар по груші', src: c('trenuvannia-04-divchynka-hrusha-trener-2'), alt: 'Дівчинка в рожевих рукавичках б’є по груші, тренер страхує' },
      { cap: 'ЗФП', brief: 'Шина', src: c('trenuvannia-05-khlopchyk-shyna'), alt: 'Хлопчик перевертає шину на загальній фізичній підготовці в клубі «Світ Боксу»' },
    ],
    gallery: [
      { size: 'l', cap: 'Характер', brief: '', src: c('fotosesiia-05-khlopchyk-rukavychky-ryng'), alt: 'Юний боксер у червоних рукавичках кричить у рингу — школа боксу для дітей у Броварах' },
      { size: 't', cap: 'Перед виходом', brief: '', src: c('fotosesiia-06-yunior-u-khalati'), alt: 'Юніор у боксерському халаті й рукавичках у роздягальні перед боєм' },
      { size: 'n', cap: 'Перший бій', brief: '', src: c('turnir-01-dity-bii'), alt: 'Діти в шоломах боксують на турнірі' },
      { size: 'n', cap: 'У кутку', brief: '', src: c('turnir-04-yunior-shlem-u-kuti'), alt: 'Юніор у синьому шоломі в кутку рингу, поруч тренер' },
      { size: 'w', cap: 'Дитяча група', brief: '', src: c('komanda-03-dity-z-poiasom-wbc'), alt: 'Діти клубу «Світ Боксу» в залі з чемпіонським поясом WBC' },
      { size: 'n', cap: 'Медалі', brief: '', src: c('komanda-08-dity-z-medaliamy-v-zali'), alt: 'Діти клубу «Світ Боксу» з медалями в рингу свого залу' },
      { size: 'n', cap: 'Кубок', brief: '', src: c('turnir-11-yunior-z-kubkom'), alt: 'Юніор клубу з кубком турніру, поруч тренер — школа боксу для дітей у Броварах' },
    ],
  },
  divchata: {
    rounds: [
      { cap: 'Розминка', brief: 'Дівчата зі скакалкою на розминці' },
      { cap: 'Техніка', brief: 'Лапи з тренером', src: c('trenuvannia-01-divchyna-lapy-trener'), alt: 'Тренер на лапах ставить дівчині прямий удар' },
      { cap: 'Груша й лапи', brief: 'Серія по лапах: рух, енергія' },
      { cap: 'Кор і розтяжка', brief: 'Прес або планка наприкінці тренування' },
    ],
    gallery: [
      { size: 'l', cap: 'Чемпіонат України', brief: '', src: c('turnir-06-chempionat-ukrainy-bokserka-medal'), alt: 'Спортсменка клубу з медаллю чемпіонату України з боксу та тренер' },
      { size: 't', cap: 'Фокус', brief: '', src: c('fotosesiia-02-bokserka-portret'), alt: 'Портрет боксерки клубу в рукавичках — бокс для дівчат у Броварах' },
      { size: 't', cap: 'Нагорода', brief: '', src: c('turnir-07-bokserka-z-trenerom-nagoroda'), alt: 'Боксерка з тренером і нагородою після турніру' },
      { size: 'n', cap: 'Пояси', brief: '', src: c('turnir-08-bokserka-z-poiasamy'), alt: 'Юна боксерка клубу з чемпіонськими поясами' },
      { size: 'n', cap: 'З тренером', brief: '', src: c('turnir-09-bokserka-poiasy-trener'), alt: 'Боксерка з поясами і тренер клубу «Світ Боксу»' },
      { size: 'w', cap: 'З перших кроків', brief: '', src: c('trenuvannia-04-divchynka-hrusha-trener-2'), alt: 'Наймолодші дівчата теж тренуються: удар по груші з тренером' },
    ],
  },
  choloviky: {
    rounds: [
      { cap: 'Розминка', brief: 'Бій з тінню', src: c('fotosesiia-11-bokser-dym'), alt: 'Бій з тінню: боксер у димі на тренуванні' },
      { cap: 'Техніка', brief: 'Комбінація з тренером крупно' },
      { cap: 'Ринг', brief: 'Атака', src: c('profi-09-bii-ataka'), alt: 'Боксер клубу атакує в рингу' },
      { cap: 'ЗФП', brief: 'Підтягування, гирі або канати' },
    ],
    gallery: [
      { size: 'l', cap: 'Готовий', brief: '', src: c('fotosesiia-07-bokser-kapiushon'), alt: 'Боксер клубу «Світ Боксу» в капюшоні й бинтах — бокс для чоловіків у Броварах' },
      { size: 'w', cap: 'Вихід', brief: '', src: c('profi-11-vykhid-na-ryng'), alt: 'Вихід боксера клубу на ринг' },
      { size: 'w', cap: 'У рингу', brief: '', src: c('profi-10-bokser-u-rynhu'), alt: 'Боксер у синіх рукавичках у рингу' },
      { size: 'n', cap: 'Емоція', brief: '', src: c('fotosesiia-09-bokser-krik'), alt: 'Боксер на фотосесії клубу: емоція перед боєм' },
      { size: 'n', cap: 'Стійка', brief: '', src: c('fotosesiia-08-bokser-kapiushon-2'), alt: 'Боксер у капюшоні в стійці' },
      { size: 'n', cap: 'Перемога', brief: '', src: c('profi-06-peremoha-ruky-vhoru'), alt: 'Перемога: боксер підняв руки в рингу' },
      { size: 'n', cap: 'Зважування', brief: '', src: c('profi-14-zvazhuvannia'), alt: 'Зважування боксерів перед боєм' },
    ],
  },
  indyvidualno: {
    rounds: [
      { cap: 'Діагностика', brief: 'Тренер оцінює рух учня, розмова' },
      { cap: 'Техніка', brief: 'Тренер поправляє удар', src: c('trenuvannia-03-divchynka-hrusha-trener'), alt: 'Тренер поправляє удар на індивідуальному занятті з боксу' },
      { cap: 'Лапи', brief: 'Лапи один на один', src: c('trenuvannia-02-bokserka-lapy-trener'), alt: 'Робота на лапах один на один з тренером' },
      { cap: 'План', brief: 'Тренер і учень обговорюють план' },
    ],
    gallery: [
      { size: 'l', cap: 'Поруч на кожному ударі', brief: '', src: c('trenuvannia-04-divchynka-hrusha-trener-2'), alt: 'Індивідуальне тренування з боксу для дитини: тренер поруч на кожному ударі' },
      { size: 't', cap: 'Результат', brief: '', src: c('turnir-09-bokserka-poiasy-trener'), alt: 'Результат роботи з тренером: боксерка з чемпіонськими поясами' },
      { size: 'n', cap: 'Тренер', brief: '', src: c('fotosesiia-01-trener-emotsiia'), alt: 'Тренер клубу «Світ Боксу» на фотосесії' },
      { size: 'n', cap: 'Чемпіон', brief: '', src: c('profi-03-chempion-poias-trener'), alt: 'Тренер і чемпіон з поясом після бою' },
    ],
  },
  funktsionalni: {
    rounds: [
      { cap: 'Розминка', brief: 'Розминка суглобів у групі' },
      { cap: 'Коло', brief: 'Шина', src: c('trenuvannia-05-khlopchyk-shyna'), alt: 'Робота з шиною на функціональному тренуванні' },
      { cap: 'Кор', brief: 'Планка або прес' },
      { cap: 'Розтяжка', brief: 'Розтяжка наприкінці' },
    ],
    gallery: [
      { size: 'l', cap: 'Канати', brief: 'Робота з канатами, рух у кадрі' },
      { size: 't', cap: 'Гиря', brief: 'Мах гирею. Вертикальний кадр' },
      { size: 'n', cap: 'Крейда', brief: 'Руки в крейді. Деталь' },
      { size: 'n', cap: 'Стрибки', brief: 'Стрибки на тумбу або берпі' },
      { size: 'w', cap: 'Група', brief: 'Група на колі станцій, широкий кадр' },
      { size: 'n', cap: 'Пульс', brief: 'Втома і задоволення після кола' },
      { size: 'n', cap: 'Розтяжка', brief: 'Група на розтяжці' },
    ],
  },
};
