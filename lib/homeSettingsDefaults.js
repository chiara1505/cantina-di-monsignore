/** Foto card sezione “La cucina” in homepage (fallback se non caricate da Payload). */
export const DEFAULT_KITCHEN_HOME_IMAGES = {
  antipasti: {
    image: '/assets/images/resource/menu-antipasti.jpg',
    imageAlt: 'Antipasti siciliani — La Cantina di Monsignore, Castiglione di Sicilia',
  },
  primi: {
    image: '/assets/images/resource/menu-primi.jpg',
    imageAlt: 'Primi Piatti siciliani — La Cantina di Monsignore, Castiglione di Sicilia',
  },
  secondi: {
    image: '/assets/images/resource/menu-secondi.jpg',
    imageAlt: 'Secondi Piatti siciliani — La Cantina di Monsignore, Castiglione di Sicilia',
  },
  dessert: {
    image: '/assets/images/resource/menu-dolci.jpg',
    imageAlt: 'Dolci — La Cantina di Monsignore, Castiglione di Sicilia',
  },
}

/** Due piatti sezione “Le Specialità” in homepage (fallback se non impostati da Payload). */
export const DEFAULT_SPECIALTIES_HOME = {
  left: {
    name: 'Lingotto di Parmigiana',
    image: '/assets/images/resource/promotion-1.jpg',
    imageAlt: 'Lingotto di Parmigiana — La Cantina di Monsignore',
  },
  right: {
    name: 'Mezze lune “Home Made”',
    image: '/assets/images/resource/promotion-2.jpg',
    imageAlt: 'Mezze lune “Home Made” — La Cantina di Monsignore',
  },
}

export function buildDefaultHomeSettings() {
  return {
    kitchenHome: {
      antipasti: { ...DEFAULT_KITCHEN_HOME_IMAGES.antipasti },
      primi: { ...DEFAULT_KITCHEN_HOME_IMAGES.primi },
      secondi: { ...DEFAULT_KITCHEN_HOME_IMAGES.secondi },
      dessert: { ...DEFAULT_KITCHEN_HOME_IMAGES.dessert },
    },
    specialtiesHome: {
      left: { ...DEFAULT_SPECIALTIES_HOME.left },
      right: { ...DEFAULT_SPECIALTIES_HOME.right },
    },
  }
}

export const DEFAULT_HOME_SETTINGS = buildDefaultHomeSettings()
