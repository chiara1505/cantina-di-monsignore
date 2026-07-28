export const DISHES_MENU_TABS = [
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'primi', label: 'Primi' },
  { id: 'secondi', label: 'Secondi' },
  { id: 'dessert', label: 'Dessert' },
  { id: 'bevande', label: 'Bevande' },
];

export const menuDishes = [
  {
    id: 'parmigiana',
    category: 'antipasti',
    name: 'Lingotto di Parmigiana',
    description:
      'Parmigiana in crosta di Panko su vellutata di pomodoro fresco.',
    price: '€ 12,00',
    allergens: '1, 3, 6, 7',
  },
  {
    id: 'tartare-wagyu',
    category: 'antipasti',
    name: 'Tartare di WAGYU',
    description:
      'Tartare di WAGYU battuta al coltello con zest di uovo marinato e verdurine marinate.',
    price: '€ 16,50',
    allergens: '3, 9, 10',
    frozen: true,
  },
  {
    id: 'carpaccio',
    category: 'antipasti',
    name: 'Carpaccio di manzo',
    description:
      'Carpaccio di manzo con scaglie di provola stagionata, miele di arancia e granella di mandorle tostate.',
    price: '€ 14,50',
    allergens: '7, 8',
  },
  {
    id: 'tuma-fritta',
    category: 'antipasti',
    name: 'Tuma fritta',
    description: 'Tuma impanata e fritta su crema di peperoni.',
    price: '€ 10,50',
    allergens: '1, 7, 8',
  },
  {
    id: 'crostini-minestra',
    category: 'antipasti',
    name: 'Crostini di Pane con “Minestra di Fora”',
    description:
      'Crostini di pane fritto con verdure di campagna saltate e salsiccia al finocchietto.',
    price: '€ 9,50',
    allergens: '1, 8',
  },
  {
    id: 'spaghettone-colatura',
    category: 'primi',
    name: 'Spaghettone con Colatura di Alici',
    description:
      'Spaghettone trafilato al bronzo mantecato con colatura di alici di Cetara, fiori di zucchine e pomodoro secco “Capuliato”.',
    price: '€ 14,50',
    allergens: '1, 2, 4, 8',
  },
  {
    id: 'fusilloni-coniglio',
    category: 'primi',
    name: 'Fusilloni al ragù di coniglio',
    description: 'Fusilloni trafilati al bronzo con ragù bianco di coniglio.',
    price: '€ 14,50',
    allergens: '1, 9',
  },
  {
    id: 'gnocchetti-tonno',
    category: 'primi',
    name: 'Gnocchetti di Patate e Tonno fresco alla Trapanese',
    description: 'Gnocchetti di patate con tonno fresco alla trapanese.',
    price: '€ 15,50',
    allergens: '1, 2, 4, 8, 13',
  },
  {
    id: 'mezze-lune',
    category: 'primi',
    name: 'Mezze lune “Home Made”',
    description:
      'Ravioloni di pasta all’uovo alla parmigiana, mantecati con datterino giallo e julienne di ricotta.',
    price: '€ 15,50',
    allergens: '1, 3, 7, 6',
  },
  {
    id: 'tagliata',
    category: 'secondi',
    name: 'Tagliata di Manzo',
    description: 'Tagliata di manzo ai ferri su letto di rucoletta.',
    price: '€ 19,00',
    allergens: '7, 8',
    mediumCooking: true,
  },
  {
    id: 'filetto-pistacchio',
    category: 'secondi',
    name: 'Filetto di Manzo al Pistacchio',
    description: null,
    price: '€ 24,00',
  },
  {
    id: 'agnello-peperoni',
    category: 'secondi',
    name: 'Costolette di Agnello ai Peperoni',
    description:
      'Costolette di agnello, peperoni, cipolla e olive taggiasche.',
    price: '€ 19,00',
    allergens: '7',
  },
  {
    id: 'coniglio-agrodolce',
    category: 'secondi',
    name: 'Coniglio in agrodolce alla Siciliana',
    description:
      'Coniglio in agrodolce alla siciliana con capperi, uvetta, pinoli, sedano, cipolla e carote.',
    price: '€ 18,00',
    allergens: '1, 8, 9',
    frozen: true,
  },
  {
    id: 'guancette',
    category: 'secondi',
    name: 'Guancette di Suino brasate',
    description:
      'Guancette di suino brasate al Nerello Mascalese sul fondo di cottura.',
    price: '€ 19,00',
    allergens: '9',
  },
  {
    id: 'verdure-campagna',
    category: 'contorni',
    name: 'Verdure di campagna saltate all’aglio',
    description: null,
    price: '€ 5,50',
  },
  {
    id: 'patate-rustiche',
    category: 'contorni',
    name: 'Patate Rustiche',
    description: null,
    price: '€ 5,50',
  },
  {
    id: 'insalata-verde',
    category: 'contorni',
    name: 'Insalata verde',
    description: null,
    price: '€ 4,50',
  },
  {
    id: 'baba-siciliano',
    category: 'dessert',
    name: 'Babà Siciliano su biscotto alla Mandorla',
    description: null,
    price: '€ 8,00',
  },
  {
    id: 'tartufo-cioccolato',
    category: 'dessert',
    name: 'Tartufo al Cioccolato',
    description: null,
    price: '€ 8,00',
  },
  {
    id: 'cheesecake-fragole',
    category: 'dessert',
    name: 'Cheesecake alle Fragole',
    description: null,
    price: '€ 8,00',
  },
  {
    id: 'cheesecake-mango',
    category: 'dessert',
    name: 'Cheesecake al Mango',
    description: null,
    price: '€ 8,00',
  },
  {
    id: 'tiramisu',
    category: 'dessert',
    name: 'Tiramisù',
    description: null,
    price: '€ 8,00',
  },
  {
    id: 'semifreddo-biscoff',
    category: 'dessert',
    name: 'Semifreddo BISCOFF LOTUS e Caramello',
    description: null,
    price: '€ 8,00',
  },
  {
    id: 'semifreddo-agrumi',
    category: 'dessert',
    name: 'Semifreddo agli Agrumi',
    description: null,
    price: '€ 8,00',
  },
  {
    id: 'semifreddo-torroncino',
    category: 'dessert',
    name: 'Semifreddo Torroncino Mandorla',
    description: null,
    price: '€ 8,00',
  },
  {
    id: 'gelato-amarena',
    category: 'dessert',
    name: 'Gelato alla Panna Variegato Amarena',
    description: null,
    price: '€ 8,00',
  },
  {
    id: 'gelato-cioccolato',
    category: 'dessert',
    name: 'Gelato alla Panna Variegato Cioccolato',
    description: null,
    price: '€ 8,00',
  },
  {
    id: 'acqua-naturale',
    category: 'bevande',
    name: 'Acqua naturale 100 cl',
    description: null,
    price: '€ 3,00',
  },
  {
    id: 'acqua-frizzante',
    category: 'bevande',
    name: 'Acqua frizzante 100 cl',
    description: null,
    price: '€ 3,00',
  },
  {
    id: 'acqua-leggermente-frizzante',
    category: 'bevande',
    name: 'Acqua leggermente frizzante 100 cl',
    description: null,
    price: '€ 3,00',
  },
  {
    id: 'coca-1l',
    category: 'bevande',
    name: 'Coca Cola 1 lt',
    description: null,
    price: '€ 5,00',
  },
  {
    id: 'coca-33',
    category: 'bevande',
    name: 'Coca Cola 33 cl',
    description: null,
    price: '€ 2,80',
  },
  {
    id: 'sprite-33',
    category: 'bevande',
    name: 'Sprite 33 cl',
    description: null,
    price: '€ 2,80',
  },
  {
    id: 'caffe',
    category: 'bevande',
    name: 'Caffè',
    description: null,
    price: '€ 2,00',
  },
];

export const menuServiceCharges = [
  {
    id: 'servizio',
    name: 'Servizio',
    price: '€ 3,00',
  },
  {
    id: 'sporzionamento',
    name: 'Sporzionamento',
    price: '€ 1,00',
  },
];

export function getDishesByCategory(category) {
  return menuDishes.filter((dish) => dish.category === category);
}

export function getSecondiTabSections() {
  return [
    { category: 'secondi' },
    { title: 'Contorni', category: 'contorni' },
  ];
}
