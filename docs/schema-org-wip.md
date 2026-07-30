# Schema.org — Nota di sviluppo (WIP)

> Integrazione dati strutturati per SEO locale e rich results Google.  
> Stato: **in corso** — aggiornare man mano che si implementano le voci.

---

## ✅ Già implementato

### `/menu` — Menu + Restaurant (base)
- File: `lib/generateMenuSchema.js`, inject in `app/(frontend)/menu/page.js`
- Tipi: `Restaurant` → `Menu` → `MenuSection` → `MenuItem`
- Dati da Payload (`menu-dishes`, `published: true`)
- Campi piatti: `name`, `description`, `offers` (prezzo EUR), allergeni in descrizione
- Sezioni: Antipasti, Primi, Secondi, Contorni, Dessert, Bevande
- Opzionale: `NEXT_PUBLIC_SITE_URL` in `.env` per URL canonici

### Da affinare in futuro (menu)
- [ ] `telephone`, `email`, `openingHours` nel blocco Restaurant
- [ ] `suitableForDiet` (vegetariano, senza glutine, ecc.)
- [ ] `image` sui singoli piatti
- [ ] Schema dedicato per `/menu/vini`

---

## 🔴 Priorità alta — SEO locale + Google Maps

### 1. `Restaurant` / `FoodEstablishment` (homepage o layout globale)
Tipo più importante per ricerca locale. Campi consigliati:

| Campo | Valore Cantina di Monsignore |
|-------|------------------------------|
| `name` | Cantina di Monsignore |
| `telephone` | +39 0942 09 05 38 |
| `email` | lacantinadimonsignore@gmail.com |
| `url` | URL sito (Vercel) |
| `image` | logo o foto locale |
| `priceRange` | `€€` |
| `servesCuisine` | `Italian`, `Sicilian` |
| `openingHoursSpecification` | orari apertura |
| `geo` | 37.8826811, 15.1230643 (Piazza Sant'Antonio) |
| `sameAs` | Instagram, Facebook |
| `acceptsReservations` | `true` |
| `hasMenu` | URL `/menu` |

**Nota:** `Restaurant` è già sottotipo di `LocalBusiness` — non duplicare entrambi.

---

## 🟡 Priorità media — Pagine specifiche

### 2. `BreadcrumbList` (pagine interne)
Es. Home → Il Menù → I Piatti. Utile per risultati di ricerca.

### 3. `WebSite` + `SearchAction` (homepage)
Sito ufficiale del ristorante. `SearchAction` solo se esiste ricerca interna.

### 4. `Organization` / logo
Spesso integrabile nel blocco `Restaurant` principale (`logo`).

### 5. `/menu/vini` — Menu vini
Stesso pattern di `/menu`, collection Payload `wines`.

---

## 🟢 Priorità bassa / quando servono

### 6. `FAQPage` (`/faq`)
Solo se la pagina FAQ resta nel sito (parcheggio, allergeni, prenotazioni…).

### 7. `Event`
Serate speciali, degustazioni — solo con sezione eventi attiva.

### 8. `Review` / `AggregateRating`
**Solo recensioni reali pubblicate sul sito.** Mai inventare — rischio penalizzazioni Google.

### 9. `Article` / `BlogPosting`
Solo se si attiva un blog.

---

## ❌ Da evitare

- `LocalBusiness` duplicato accanto a `Restaurant`
- `AggregateRating` senza recensioni verificabili
- JSON-LD identici e ripetuti su ogni pagina

---

## Roadmap consigliata per pagina

| Pagina | Schema target | Stato |
|--------|---------------|-------|
| Homepage | `Restaurant` (completo) | ⬜ TODO |
| `/menu` | `Restaurant` + `Menu` | ✅ Fatto |
| `/menu/vini` | `Menu` / sezione vini | ⬜ TODO |
| `/contact` | `ContactPoint` / estensione Restaurant | ⬜ TODO |
| `/about-us` | `AboutPage` + Restaurant | ⬜ TODO |
| Pagine interne | `BreadcrumbList` | ⬜ TODO |

---

## Prossimo passo suggerito

**Homepage — blocco `Restaurant` completo** con telefono, email, orari, social, `acceptsReservations: true`.  
Singolo intervento con il maggior impatto sulla SEO locale.

---

## Riferimenti

- [Menu](https://schema.org/Menu)
- [MenuSection](https://schema.org/MenuSection)
- [MenuItem](https://schema.org/MenuItem)
- [Restaurant](https://schema.org/Restaurant)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

*Ultimo aggiornamento: luglio 2026*
