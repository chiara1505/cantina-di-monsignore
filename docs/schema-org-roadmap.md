# Schema.org — Nota di sviluppo (WIP)

> Integrazione dati strutturati per Cantina di Monsignore.  
> Stato: **in corso** — aggiornare man mano che si implementano i blocchi.

---

## ✅ Già implementato

### `/menu` — Menu piatti
- **File:** `lib/generateMenuSchema.js`, `app/(frontend)/menu/page.js`
- **Schema:** `Restaurant` → `hasMenu` → `Menu` → `MenuSection` → `MenuItem`
- **Dati:** generati automaticamente da Payload (`menu-dishes`)
- **Campi piatti:** name, description, offers (price EUR), allergeni in description
- **Sezioni:** Antipasti, Primi, Secondi, Contorni, Dessert, Bevande
- **Revalidate:** 60s (allineato alla pagina menu)
- **Opzionale:** `NEXT_PUBLIC_SITE_URL` in `.env` per URL canonici nello schema

### Verifica
- View source su `/menu` → cercare `"@type": "Restaurant"`
- [Google Rich Results Test](https://search.google.com/test/rich-results) dopo deploy

---

## 🔜 Priorità alta — da implementare

### 1. `Restaurant` completo in **homepage**
Tipo più importante per SEO locale e Google Maps.

| Campo | Valore / fonte |
|-------|----------------|
| `name` | Cantina di Monsignore |
| `telephone` | +39 0942 09 05 38 |
| `email` | lacantinadimonsignore@gmail.com |
| `url` | NEXT_PUBLIC_SITE_URL |
| `image` | logo o foto locale |
| `priceRange` | €€ |
| `servesCuisine` | Italian, Sicilian |
| `openingHoursSpecification` | orari apertura (da definire) |
| `geo` | `lib/contactInfo.js` (37.8826811, 15.1230643) |
| `address` | Piazza Sant'Antonio n. 5, Castiglione di Sicilia (ME) |
| `sameAs` | Instagram, Facebook (URL da definire) |
| `acceptsReservations` | true |
| `hasMenu` | /menu |

**Nota:** `Restaurant` è già sottotipo di `LocalBusiness` — non duplicare `LocalBusiness` separato.

---

## 🔜 Priorità media

### 2. `Menu` su **`/menu/vini`**
- Stesso pattern di `/menu`, collection Payload `wines` (quando collegata)
- `MenuSection`: Bollicine, Bianchi, Rossi, Rosati, Champagne

### 3. `BreadcrumbList` — pagine interne
- Es. Home → Il Menù → I Piatti
- File candidato: `components/layout/Breadcrumb.js` o layout per pagina

### 4. `WebSite` + `Organization` (homepage)
- Sito ufficiale del ristorante
- `logo` per rich results
- `SearchAction` solo se si aggiunge ricerca interna (non prioritario)

### 5. **`/contact`** — `ContactPoint`
- Estensione o secondo blocco collegato al `Restaurant`
- telephone, email, address già in `lib/contactInfo.js`

### 6. **`/about-us`** — `AboutPage`
- WebPage + riferimento allo stesso `@id` del Restaurant

---

## ⏸️ Priorità bassa / solo se serve

| Schema | Quando |
|--------|--------|
| `FAQPage` | Se si mantiene `/faq` con domande utili |
| `Event` | Serate speciali, degustazioni |
| `Review` / `AggregateRating` | **Solo** recensioni reali pubblicate sul sito |
| `Article` / `BlogPosting` | Se si attiva il blog |

---

## ❌ Da evitare

- Duplicare `LocalBusiness` + `Restaurant` sulla stessa pagina
- `AggregateRating` inventati (penalizzazioni Google)
- JSON-LD identici e ripetuti su ogni pagina senza motivo

---

## Mappa schema consigliata (target)

| Pagina | Schema |
|--------|--------|
| Homepage | `Restaurant` (completo) |
| `/menu` | `Restaurant` + `Menu` ✅ |
| `/menu/vini` | `Menu` (vini) |
| `/contact` | `ContactPoint` / `Restaurant` |
| `/about-us` | `AboutPage` |
| Pagine interne | `BreadcrumbList` |

---

## Affinamenti futuri su MenuItem

- `suitableForDiet` (vegetariano, senza glutine)
- `image` per singolo piatto
- `nutrition` / allergeni con vocabolario dedicato (se Google lo supporta meglio)
- Menu del giorno come `MenuSection` separata

---

## Riferimenti

- https://schema.org/Restaurant
- https://schema.org/Menu
- https://schema.org/MenuSection
- https://schema.org/MenuItem
- https://schema.org/LocalBusiness

---

*Ultimo aggiornamento: luglio 2026 — sessione Payload + Neon + menu collegato*
