/**
 * Prodotti vino dello shop online (non carta vini ristorante).
 * Foto e PDF di riferimento: Desktop/Shop/Pubblicati/<Nome prodotto>/
 * Pubblicati solo i vini con foto mappate in SHOP_WINE_IMAGES.
 *
 * Home (carosello): PNG con sfondo trasparente → public/assets/images/shop/<slug>.png
 * Shop (catalogo): JPG con sfondo bianco → public/assets/images/shop/<slug>.jpg
 */

/** Slug → percorso immagine (copiate da Shop/Pubblicati/) */
const SHOP_WINE_IMAGES = {
  'etna-rosso-giovanni-rosso': '/assets/images/shop/etna-rosso-giovanni-rosso.jpg',
  'etna-bianco-giovanni-rosso': '/assets/images/shop/etna-bianco-giovanni-rosso.jpg',
  'barbera-dalba-giovanni-rosso': '/assets/images/shop/barbera-dalba-giovanni-rosso.jpg',
  'roero-arneis-giovanni-rosso': '/assets/images/shop/roero-arneis-giovanni-rosso.jpg',
  'etna-rosso-davide-fregonese': '/assets/images/shop/etna-rosso-davide-fregonese.jpg',
  'etna-bianco-davide-fregonese': '/assets/images/shop/etna-bianco-davide-fregonese.jpg',
  'etna-rosato-davide-fregonese': '/assets/images/shop/etna-rosato-davide-fregonese.jpg',
  'etna-rosso-riserva-davide-fregonese': '/assets/images/shop/etna-rosso-riserva-davide-fregonese.jpg',
  'barolo-cerretta-davide-fregonese': '/assets/images/shop/barolo-cerretta-davide-fregonese.jpg',
  'barolo-prapo-davide-fregonese': '/assets/images/shop/barolo-prapo-davide-fregonese.jpg',
  'langhe-nebbiolo-davide-fregonese': '/assets/images/shop/langhe-nebbiolo-davide-fregonese.jpg',
};

/** Gradazione alcolica (% vol.) — da PDF scheda tecnica */
const SHOP_WINE_ALCOHOL = {
  'etna-rosso-davide-fregonese': '13,0',
  'etna-bianco-davide-fregonese': '12,0',
  'etna-rosato-davide-fregonese': '13,0',
  'etna-rosso-riserva-davide-fregonese': '13,0',
  'barolo-cerretta-davide-fregonese': '14,0',
  'barolo-prapo-davide-fregonese': '14,0',
  'langhe-nebbiolo-davide-fregonese': '14,0',
};

const PLACEHOLDER_IMAGE = '/assets/images/background/shop-bg.jpg';

function withWineImage(product) {
  const image = SHOP_WINE_IMAGES[product.slug];
  const alcohol = product.alcohol ?? SHOP_WINE_ALCOHOL[product.slug] ?? '';

  return {
    ...product,
    alcohol,
    image: image ?? PLACEHOLDER_IMAGE,
    imageCarousel: image ? `/assets/images/shop/${product.slug}.png` : undefined,
    published: Boolean(image),
  };
}

/** @typedef {import('./shopProducts.js').ShopProduct} ShopProduct */

/** @type {ShopProduct[]} */
const SHOP_WINE_PRODUCTS_RAW = [
  {
    slug: 'etna-rosso-giovanni-rosso',
    name: 'Giovanni Rosso — Etna Rosso DOP',
    category: 'vini',
    price: 18,
    availability: 'available',
    shortDescription:
      'Olfatto fine e penetrante, con note di viola, bergamotto, sottobosco e pietra bagnata. Al palato è succulento e progressivo, con tannini delicati e un finale deciso e sapido.',
    description:
      'Vino rosso dell\'Etna, da uve Nerello Mascalese raccolte a mano in ottobre. Dopo la pigiatura soffice, il mosto fermenta a contatto con le bucce in vasche d\'acciaio per circa 10 giorni, con rimontaggi giornalieri e un délestage a metà periodo. L\'affinamento è attualmente in fase sperimentale.\n\nAl naso è fine e penetrante, con profumi di viola, bergamotto, sottobosco e pietra bagnata, con un accenno di pepe bianco. In bocca è succulento e progressivo, con tannini delicati e vivace acidità; il finale è deciso e sapido.',
    characteristics: [
      'Collocazione: Zona della DOP Etna Rosso',
      'Varietà: Nerello Mascalese',
      'Vigneto: esposizioni nord/nord-est, altitudine 730–750 m s.l.m.',
      'Vinificazione: fermentazione in vasche d\'acciaio per circa 10 giorni, con rimontaggi giornalieri e délestage a metà periodo',
      'Affinamento: in fase sperimentale',
      'Profumi: viola, bergamotto, sottobosco, pietra bagnata, accenno di pepe bianco',
      'Palato: succulento e progressivo, tannini delicati, vivace acidità, finale deciso e sapido',
      'Temperatura di servizio: 16–17 °C',
    ],
    pairings: ['Filetto alla Wellington', 'Zuppa di funghi con crostoni'],
    image: '/assets/images/shop/etna-rosso-giovanni-rosso.jpg',
    imageAlt: 'Giovanni Rosso Etna Rosso DOP — bottiglia',
    specs: [
      { label: 'Denominazione', value: 'Etna Rosso DOP' },
      { label: 'Produttore', value: 'Giovanni Rosso' },
      { label: 'Zona di produzione', value: 'Zona della DOP Etna Rosso' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'etna-bianco-giovanni-rosso',
    name: 'Giovanni Rosso — Etna Bianco DOP',
    category: 'vini',
    price: 0,
    availability: 'available',
    published: false,
    shortDescription:
      'Aroma intenso di ginestra e agrumi a buccia gialla su sfondo erbaceo. Al palato è pieno, intenso e lineare, con grande freschezza e un finale rappresentativo del territorio.',
    description:
      'Etna Bianco da uve Carricante, raccolte a mano in ottobre. Dopo una soffice pressatura a grappolo intero, il mosto fermenta a bassa temperatura in vasche d\'acciaio per 15–20 giorni circa. Affinamento in acciaio, élevage sur lies per i cinque mesi di pre-imbottigliamento con batonnage settimanale.',
    characteristics: [
      'Collocazione: Zona della DOP Etna Bianco',
      'Varietà: Carricante',
      'Vigneto: esposizioni nord/nord-est, altitudine 730–750 m s.l.m.',
      'Vinificazione: pressatura a grappolo intero, fermentazione in acciaio 15–20 giorni',
      'Affinamento: sur lies in acciaio per 5 mesi con batonnage settimanale',
      'Profumi: ginestra, agrumi a buccia gialla, sfondo erbaceo',
      'Palato: pieno, intenso, lineare, grande freschezza',
      'Temperatura di servizio: 9–11 °C',
    ],
    pairings: ['Risotto ai frutti di mare', 'Frittura di paranza', 'Orata al sale'],
    image: '/assets/images/background/shop-bg.jpg',
    imageAlt: 'Giovanni Rosso Etna Bianco DOP',
    specs: [
      { label: 'Denominazione', value: 'Etna Bianco DOP' },
      { label: 'Produttore', value: 'Giovanni Rosso' },
      { label: 'Zona di produzione', value: 'Zona della DOP Etna Bianco' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'barbera-dalba-giovanni-rosso',
    name: 'Giovanni Rosso — Barbera d\'Alba DOC',
    category: 'vini',
    price: 0,
    availability: 'available',
    published: false,
    shortDescription:
      'Profumi di prugne, lamponi, mirtilli e glicine. Al palato grande agilità, bella armonia e note acidule vibranti con freschezza vivace.',
    description:
      'Barbera d\'Alba da uve raccolte a mano in ottobre. Dopo la pigiatura soffice, il mosto fermenta a contatto con le bucce in vasche d\'acciaio per circa 10–15 giorni, con rimontaggi giornalieri e un délestage a metà periodo. Affinamento in botti grandi da 50 hl di rovere francese per alcuni mesi.',
    characteristics: [
      'Collocazione: Zona di produzione della DOC Barbera d\'Alba',
      'Varietà: Barbera',
      'Vigneto: esposizioni varie, altitudini varie',
      'Vinificazione: fermentazione in acciaio 10–15 giorni con rimontaggi e délestage',
      'Affinamento: botti grandi da 50 hl di rovere francese',
      'Profumi: prugne, lamponi, mirtilli, glicine',
      'Palato: grande agilità, armonia, acidità vibrante e freschezza',
      'Temperatura di servizio: 14–16 °C',
    ],
    pairings: ['Formaggi a latte crudo', 'Salumi', 'Risotti'],
    image: '/assets/images/background/shop-bg.jpg',
    imageAlt: 'Giovanni Rosso Barbera d\'Alba DOC',
    specs: [
      { label: 'Denominazione', value: 'Barbera d\'Alba DOC' },
      { label: 'Produttore', value: 'Giovanni Rosso' },
      { label: 'Zona di produzione', value: 'Barbera d\'Alba' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'roero-arneis-giovanni-rosso',
    name: 'Giovanni Rosso — Roero Arneis DOCG',
    category: 'vini',
    price: 0,
    availability: 'available',
    published: false,
    shortDescription:
      'Raffinato ed elegante al naso, con richiami di acacia, pera e pesca e tocchi di frutta tropicale. Al palato morbido e persistente, fresco ed equilibrato con finale sapido.',
    description:
      'Roero Arneis da uve Arneis raccolte a mano in settembre. Dopo la diraspatura, pressatura soffice e breve macerazione a freddo, la fermentazione si svolge in vasche d\'acciaio a temperatura controllata per circa 21 giorni. Affinamento in acciaio per circa 6 mesi e in bottiglia per 3 mesi.',
    characteristics: [
      'Collocazione: Zona della DOCG Roero Arneis',
      'Varietà: Arneis',
      'Vigneto: esposizioni varie, altitudine 280 m s.l.m., impianto 1981–1991',
      'Vinificazione: pressatura soffice, macerazione a freddo, fermentazione 21 giorni in acciaio',
      'Affinamento: 6 mesi in acciaio e 3 mesi in bottiglia',
      'Profumi: acacia, pera, pesca, frutta tropicale',
      'Palato: morbido, persistente, fresco, equilibrato, finale sapido',
      'Temperatura di servizio: 10–12 °C',
    ],
    pairings: ['Frutti di mare', 'Triglie fritte', 'Zuppa di verdure'],
    image: '/assets/images/background/shop-bg.jpg',
    imageAlt: 'Giovanni Rosso Roero Arneis DOCG',
    specs: [
      { label: 'Denominazione', value: 'Roero Arneis DOCG' },
      { label: 'Produttore', value: 'Giovanni Rosso' },
      { label: 'Zona di produzione', value: 'Roero' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'etna-rosso-davide-fregonese',
    name: 'Davide Fregonese — Etna Rosso DOP',
    category: 'vini',
    price: 0,
    availability: 'available',
    shortDescription:
      'Naso intenso e vinoso, con note di frutta matura e macchia mediterranea. Al palato succulento e progressivo, tannini delicati, vivace acidità e finale sapido e persistente.',
    description:
      'Etna Rosso da uve Nerello Mascalese con piccole percentuali di altre varietà autoctone, vigneto del 1975 a Montedolce, Solicchiata. Fermentazione in acciaio per circa 10 giorni con rimontaggi giornalieri e délestage a metà periodo. Affinamento in vasche di acciaio.',
    characteristics: [
      'Denominazione: Etna Rosso DOP',
      'Produttore: Davide Fregonese',
      'Vitigno: Nerello Mascalese e uve autoctone',
      'Vigna: Montedolce, Solicchiata — impianto 1975',
      'Suolo: vulcanico — altitudine 730–750 m s.l.m., esposizione nord/nord-est',
      'Vinificazione: fermentazione in acciaio circa 10 giorni',
      'Affinamento: vasche di acciaio',
      'Temperatura di servizio: 14–16 °C',
    ],
    pairings: ['Filetto alla Wellington', 'Zuppa di funghi con crostoni'],
    imageAlt: 'Davide Fregonese Etna Rosso DOP',
    specs: [
      { label: 'Denominazione', value: 'Etna Rosso DOP' },
      { label: 'Produttore', value: 'Davide Fregonese' },
      { label: 'Zona di produzione', value: 'Montedolce, Solicchiata' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'etna-bianco-davide-fregonese',
    name: 'Davide Fregonese — Etna Bianco DOP',
    category: 'vini',
    price: 0,
    availability: 'available',
    shortDescription:
      'Pieno, intenso, fresco e minerale. Sentori di frutti a polpa bianca, erbe aromatiche del mediterraneo, finale sapido e persistente.',
    description:
      'Etna Bianco da uve Carricante con piccole percentuali di altre varietà autoctone, vigneto del 1975 a Montedolce, Solicchiata. Dopo pressatura diretta, fermentazione in acciaio per circa 15 giorni. Affinamento sur lies in acciaio per circa 5 mesi con batonnage settimanale.',
    characteristics: [
      'Denominazione: Etna Bianco DOP',
      'Produttore: Davide Fregonese',
      'Vitigno: Carricante e uve autoctone',
      'Vigna: Montedolce, Solicchiata — impianto 1975',
      'Suolo: vulcanico — altitudine 730–750 m s.l.m.',
      'Vinificazione: pressatura diretta, fermentazione in acciaio circa 15 giorni',
      'Affinamento: sur lies in acciaio circa 5 mesi con batonnage settimanale',
      'Temperatura di servizio: 12 °C',
    ],
    pairings: ['Risotto ai frutti di mare', 'Frittura di paranza', 'Orata al sale'],
    imageAlt: 'Davide Fregonese Etna Bianco DOP',
    specs: [
      { label: 'Denominazione', value: 'Etna Bianco DOP' },
      { label: 'Produttore', value: 'Davide Fregonese' },
      { label: 'Zona di produzione', value: 'Montedolce, Solicchiata' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'etna-rosato-davide-fregonese',
    name: 'Davide Fregonese — Etna Rosato DOP',
    category: 'vini',
    price: 0,
    availability: 'available',
    shortDescription:
      'Fresco, goloso e raffinato. Profilo aromatico floreale con note di piccoli frutti a bacca rossa e fine vena minerale tipica dei terreni vulcanici.',
    description:
      'Etna Rosato da uve Nerello Mascalese, impianto 1975. Dopo la pressatura dell\'uva intera, la fermentazione avviene in vasche d\'acciaio per circa 15 giorni. Affinamento in acciaio su fecce fini per circa 5 mesi con batonnage settimanale.',
    characteristics: [
      'Denominazione: Etna Rosato DOP',
      'Produttore: Davide Fregonese',
      'Vitigno: Nerello Mascalese',
      'Vigna: Montedolce, Solicchiata — impianto 1975',
      'Suolo: vulcanico — altitudine 730–750 m s.l.m., esposizione nord/nord-est',
      'Vinificazione: pressatura uva intera, fermentazione in acciaio circa 15 giorni',
      'Affinamento: sur lies in acciaio circa 5 mesi con batonnage settimanale',
      'Temperatura di servizio: 10–12 °C',
    ],
    pairings: [
      'Aperitivo',
      'Pasticceria salata',
      'Affettati',
      'Ratatouille',
      'Piatti di pesce e crostacei saporiti',
    ],
    imageAlt: 'Davide Fregonese Etna Rosato DOP',
    specs: [
      { label: 'Denominazione', value: 'Etna Rosato DOP' },
      { label: 'Produttore', value: 'Davide Fregonese' },
      { label: 'Zona di produzione', value: 'Montedolce, Solicchiata' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'etna-rosso-riserva-davide-fregonese',
    name: 'Davide Fregonese — Etna Rosso DOP Riserva',
    category: 'vini',
    price: 0,
    availability: 'available',
    shortDescription:
      'Naso intenso e raffinato, con ciliegia candita, erbe selvatiche, minerali e sentori di pepe bianco. Al palato succulento e progressivo, tannini delicati e finale deciso e sapido.',
    description:
      'Etna Rosso Riserva da uve Nerello Mascalese con piccole percentuali di altre varietà autoctone. Fermentazione in acciaio per circa 10 giorni con rimontaggi giornalieri e délestage a metà periodo. Affinamento di almeno 48 mesi, di cui 12 mesi in tonneaux e botti grandi di rovere francese.',
    characteristics: [
      'Denominazione: Etna Rosso DOP Riserva',
      'Produttore: Davide Fregonese',
      'Vitigno: Nerello Mascalese e uve autoctone',
      'Vigna: Montedolce, Solicchiata — impianto 1975',
      'Suolo: vulcanico — altitudine 730–750 m s.l.m.',
      'Vinificazione: fermentazione in acciaio circa 10 giorni',
      'Affinamento: almeno 48 mesi, 12 mesi in tonneaux e botti di rovere francese',
      'Temperatura di servizio: 14–16 °C',
    ],
    pairings: ['Filetto alla Wellington', 'Zuppa di funghi con crostoni'],
    imageAlt: 'Davide Fregonese Etna Rosso DOP Riserva',
    specs: [
      { label: 'Denominazione', value: 'Etna Rosso DOP Riserva' },
      { label: 'Produttore', value: 'Davide Fregonese' },
      { label: 'Zona di produzione', value: 'Montedolce, Solicchiata' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'barolo-cerretta-davide-fregonese',
    name: 'Davide Fregonese — Barolo DOCG Cerretta',
    category: 'vini',
    price: 0,
    availability: 'available',
    shortDescription:
      'Aroma di fiori appassiti, confettura di mora, cacao e liquirizia. Gusto denso e avvolgente, corpo solido ed equilibrato con finale terso e trama tannica sottile ed elegante.',
    description:
      'Barolo Cerretta da uve Nebbiolo 100%. Fermentazione in vasche di cemento a contatto con le bucce per circa 25 giorni, con rimontaggi giornalieri e délestage a metà periodo. Affinamento dai 18 ai 30 mesi in botti da 25 hl di rovere francese della Foresta di Fontainebleau.',
    characteristics: [
      'Denominazione: Barolo DOCG Cerretta',
      'Produttore: Davide Fregonese',
      'Vitigno: Nebbiolo 100%',
      'Vigna: Serralunga d\'Alba, Cerretta — impianto 1998',
      'Suolo: calcareo argilloso — altitudine 340 m s.l.m., esposizione ovest',
      'Vinificazione: fermentazione in cemento circa 25 giorni',
      'Affinamento: 18–30 mesi in botti da 25 hl di rovere francese',
      'Temperatura di servizio: 16–17 °C',
    ],
    pairings: ['Costata di Fassona', 'Filetto con spugnole', 'Pernice tartufata'],
    imageAlt: 'Davide Fregonese Barolo DOCG Cerretta',
    specs: [
      { label: 'Denominazione', value: 'Barolo DOCG Cerretta' },
      { label: 'Produttore', value: 'Davide Fregonese' },
      { label: 'Zona di produzione', value: 'Serralunga d\'Alba' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'barolo-prapo-davide-fregonese',
    name: 'Davide Fregonese — Barolo DOCG Prapò',
    category: 'vini',
    price: 0,
    availability: 'available',
    shortDescription:
      'Naso imponente di frutta e spezie, confetture di more e mirtilli, chiodi di garofano. Morbidezza che supporta struttura e sapidità, tannini fini e lunga persistenza.',
    description:
      'Barolo Prapò da uve Nebbiolo 100%. Fermentazione in vasche di cemento a contatto con le bucce per circa 28 giorni, con rimontaggi giornalieri e délestage a metà periodo. Affinamento dai 18 ai 30 mesi in botti da 25 hl di rovere francese della Foresta di Fontainebleau.',
    characteristics: [
      'Denominazione: Barolo DOCG Prapò',
      'Produttore: Davide Fregonese',
      'Vitigno: Nebbiolo 100%',
      'Vigna: Serralunga d\'Alba, Prapò — impianto 2000',
      'Suolo: calcareo — altitudine 365 m s.l.m., esposizione sud-est',
      'Vinificazione: fermentazione in cemento circa 28 giorni',
      'Affinamento: 18–30 mesi in botti da 25 hl di rovere francese',
      'Temperatura di servizio: 16–18 °C',
    ],
    pairings: ['Stinco di agnello', 'Capretto al forno con patate'],
    imageAlt: 'Davide Fregonese Barolo DOCG Prapò',
    specs: [
      { label: 'Denominazione', value: 'Barolo DOCG Prapò' },
      { label: 'Produttore', value: 'Davide Fregonese' },
      { label: 'Zona di produzione', value: 'Serralunga d\'Alba' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'langhe-nebbiolo-davide-fregonese',
    name: 'Davide Fregonese — Langhe DOC Nebbiolo',
    category: 'vini',
    price: 0,
    availability: 'available',
    shortDescription:
      'Fruttato, con note di viola, rosa e ciliegia. Facile beva, struttura fine, buona freschezza e trama tannica elegante.',
    description:
      'Langhe Nebbiolo da uve Nebbiolo 100%. Fermentazione in vasche di cemento a contatto con le bucce per circa 12 giorni, con rimontaggi giornalieri e délestage a metà periodo. Affinamento dai 6 ai 12 mesi in parte in botti da 25 hl di rovere francese della Foresta di Fontainebleau.',
    characteristics: [
      'Denominazione: Langhe DOC Nebbiolo',
      'Produttore: Davide Fregonese',
      'Vitigno: Nebbiolo 100%',
      'Vigna: Langhe — suolo calcareo argilloso',
      'Esposizione: sud, sud-ovest, est',
      'Vinificazione: fermentazione in cemento circa 12 giorni',
      'Affinamento: 6–12 mesi in botti da 25 hl di rovere francese',
      'Temperatura di servizio: 14–16 °C',
    ],
    pairings: [
      'Merenda contadina',
      'Aperitivi',
      'Piatti strutturati',
    ],
    imageAlt: 'Davide Fregonese Langhe DOC Nebbiolo',
    specs: [
      { label: 'Denominazione', value: 'Langhe DOC Nebbiolo' },
      { label: 'Produttore', value: 'Davide Fregonese' },
      { label: 'Zona di produzione', value: 'Langhe' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'etna-bianco-famiglia-statella',
    name: 'Famiglia Statella — Etna Bianco DOC Biologico',
    category: 'vini',
    price: 0,
    availability: 'available',
    published: false,
    shortDescription:
      'Colore giallo paglierino, al naso intenso con note di fiori bianchi e frutta matura. Al gusto fresco, con piacevole acidità che esalta la mineralità.',
    description:
      'Etna Bianco biologico da uve 90% Carricante e 10% Catarratto, vigneti di 15 anni su terreno vulcanico a 650 m in contrada Calderara (Randazzo). Vinificazione in bianco tradizionale in acciaio a temperatura controllata; affinamento sur lies fino a marzo.',
    characteristics: [
      'Denominazione: Etna Bianco DOC Biologico',
      'Produttore: Famiglia Statella',
      'Zona di produzione: Randazzo (CT), contrada Calderara',
      'Uvaggio: 90% Carricante, 10% Catarratto',
      'Età vigneti: 15 anni — esposizione nord, altitudine 650 m',
      'Vinificazione: in acciaio a temperatura controllata, sur lies fino a marzo',
      'Viticoltura: biologica certificata',
      'Temperatura di servizio: 8–10 °C',
    ],
    pairings: ['Antipasti di pesce crudo', 'Primi di pesce o verdure', 'Formaggi freschi'],
    image: '/assets/images/background/shop-bg.jpg',
    imageAlt: 'Famiglia Statella Etna Bianco DOC Biologico',
    specs: [
      { label: 'Denominazione', value: 'Etna Bianco DOC Biologico' },
      { label: 'Produttore', value: 'Famiglia Statella' },
      { label: 'Zona di produzione', value: 'Randazzo, contrada Calderara' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'etna-rosato-famiglia-statella',
    name: 'Famiglia Statella — Etna Rosato DOC Biologico',
    category: 'vini',
    price: 0,
    availability: 'available',
    published: false,
    shortDescription:
      'Colore rosato buccia di cipolla, al naso intenso con frutti rossi e ciliegia. Al gusto fresco, aromatico e bevibile grazie alla giusta acidità.',
    description:
      'Etna Rosato biologico da uve 80% Nerello Mascalese e 20% Nerello Cappuccio, vigneti di 18 anni a 765 m in contrada Pettinociarelle (Solicchiata). Breve macerazione pre-fermentativa a freddo, pressatura soffice, fermentazione in acciaio e affinamento fino a marzo.',
    characteristics: [
      'Denominazione: Etna Rosato DOC Biologico',
      'Produttore: Famiglia Statella',
      'Zona di produzione: Castiglione di Sicilia, contrada Pettinociarelle',
      'Uvaggio: 80% Nerello Mascalese, 20% Nerello Cappuccio',
      'Età vigneti: 18 anni — esposizione nord, altitudine 765 m',
      'Vinificazione: macerazione a freddo, fermentazione in acciaio',
      'Viticoltura: biologica certificata',
      'Temperatura di servizio: 8–10 °C',
    ],
    pairings: [
      'Antipasti di pesce e crostacei',
      'Primi di pesce o verdure',
      'Secondi di carni bianche',
    ],
    image: '/assets/images/background/shop-bg.jpg',
    imageAlt: 'Famiglia Statella Etna Rosato DOC Biologico',
    specs: [
      { label: 'Denominazione', value: 'Etna Rosato DOC Biologico' },
      { label: 'Produttore', value: 'Famiglia Statella' },
      { label: 'Zona di produzione', value: 'Solicchiata, contrada Pettinociarelle' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'etna-rosso-famiglia-statella',
    name: 'Famiglia Statella — Etna Rosso DOC Biologico',
    category: 'vini',
    price: 0,
    availability: 'available',
    published: false,
    shortDescription:
      'Rosso rubino intenso, al naso note di prugna e piccoli frutti con sfumature di spezie dolci. Palato snello ed elegante, tannino vellutato e grande bevibilità.',
    description:
      'Etna Rosso biologico da uve 95% Nerello Mascalese e 5% Nerello Cappuccio, vigneti di 18–25 anni su terreno vulcanico a 700–750 m. Vinificazione tradizionale con follature, macerazione 6–7 giorni. Affinamento 50% in tonneaux di rovere francese e 50% in acciaio per 12 mesi.',
    characteristics: [
      'Denominazione: Etna Rosso DOC Biologico',
      'Produttore: Famiglia Statella',
      'Zona di produzione: Castiglione di Sicilia e Biancavilla (CT)',
      'Uvaggio: 95% Nerello Mascalese, 5% Nerello Cappuccio',
      'Età vigneti: 18–25 anni — altitudine 700–750 m',
      'Affinamento: 50% tonneaux, 50% acciaio per 12 mesi',
      'Viticoltura: biologica certificata',
      'Temperatura di servizio: 16–18 °C',
    ],
    pairings: [
      'Antipasti di salumi e verdure',
      'Primi di verdure o pesce azzurro',
      'Secondi di pesce o carne alla griglia',
      'Formaggi erborinati o a pasta filata',
    ],
    image: '/assets/images/background/shop-bg.jpg',
    imageAlt: 'Famiglia Statella Etna Rosso DOC Biologico',
    specs: [
      { label: 'Denominazione', value: 'Etna Rosso DOC Biologico' },
      { label: 'Produttore', value: 'Famiglia Statella' },
      { label: 'Zona di produzione', value: 'Castiglione di Sicilia, Biancavilla' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'etna-rosso-pettinociarelle-famiglia-statella',
    name: 'Famiglia Statella — Etna Rosso Pettinociarelle DOC Biologico',
    category: 'vini',
    price: 0,
    availability: 'available',
    published: false,
    shortDescription:
      'Rosso rubino intenso, al naso complesso con frutti rossi e macchia mediterranea. Al gusto equilibrato, tannino fitto e vellutato, finale persistente.',
    description:
      'Etna Rosso Pettinociarelle biologico da uve 90% Nerello Mascalese e 10% Nerello Cappuccio, vigneti di 18 anni a 765 m in contrada Pettinociarelle. Vinificazione tradizionale con follature, macerazione 10–15 giorni, affinamento in tonneaux di rovere francese.',
    characteristics: [
      'Denominazione: Etna Rosso DOC Biologico',
      'Produttore: Famiglia Statella',
      'Zona di produzione: Solicchiata, contrada Pettinociarelle',
      'Uvaggio: 90% Nerello Mascalese, 10% Nerello Cappuccio',
      'Età vigneti: 18 anni — esposizione nord, altitudine 765 m',
      'Vinificazione: macerazione 10–15 giorni',
      'Affinamento: tonneaux di rovere francese',
      'Temperatura di servizio: 16–18 °C',
    ],
    pairings: [
      'Primi di verdure o carne',
      'Secondi di carne bianca o rossa alla griglia',
      'Formaggi di media stagionatura',
    ],
    image: '/assets/images/background/shop-bg.jpg',
    imageAlt: 'Famiglia Statella Etna Rosso Pettinociarelle',
    specs: [
      { label: 'Denominazione', value: 'Etna Rosso DOC Biologico' },
      { label: 'Produttore', value: 'Famiglia Statella' },
      { label: 'Vigna', value: 'Pettinociarelle' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
  {
    slug: 'etna-rosso-pignatuni-famiglia-statella',
    name: 'Famiglia Statella — Etna Rosso Pignatuni DOC',
    category: 'vini',
    price: 0,
    availability: 'available',
    published: false,
    shortDescription:
      'Rosso rubino vivo, al naso ricco e complesso con note speziate e balsamiche. Al gusto potente ma equilibrato, tannino elegante e finale di grande persistenza.',
    description:
      'Etna Rosso Pignatuni da uve 95% Nerello Mascalese e 5% altre uve autoctone, vigneti di 50–100 anni a 670 m in contrada Pignatuni (Randazzo). Vinificazione tradizionale, macerazione 10–15 giorni, affinamento in barriques di rovere francese.',
    characteristics: [
      'Denominazione: Etna Rosso DOC',
      'Produttore: Famiglia Statella',
      'Zona di produzione: Randazzo (CT), contrada Pignatuni',
      'Uvaggio: 95% Nerello Mascalese, 5% uve autoctone',
      'Età vigneti: 50–100 anni — esposizione nord, altitudine 670 m',
      'Vinificazione: macerazione 10–15 giorni',
      'Affinamento: barriques di rovere francese',
      'Temperatura di servizio: 16–18 °C',
    ],
    pairings: [
      'Secondi di carne rossa e selvaggina',
      'Formaggi di lunga stagionatura',
    ],
    image: '/assets/images/background/shop-bg.jpg',
    imageAlt: 'Famiglia Statella Etna Rosso Pignatuni',
    specs: [
      { label: 'Denominazione', value: 'Etna Rosso DOC' },
      { label: 'Produttore', value: 'Famiglia Statella' },
      { label: 'Vigna', value: 'Pignatuni, Randazzo' },
      { label: 'Formato', value: '750 ml' },
    ],
  },
];

/** @type {ShopProduct[]} */
export const SHOP_WINE_PRODUCTS = SHOP_WINE_PRODUCTS_RAW.map(withWineImage);
