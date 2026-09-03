/**
 * Aggiunge la gradazione alcolica in coda alla descrizione prodotto.
 * @param {string} [description]
 * @param {string} [alcohol] Es. "13,0"
 */
export function formatShopProductDescription(description, alcohol) {
  const text = (description ?? '').trim();
  if (!alcohol) return text;

  const suffix = `Gradazione alcolica: ${alcohol}% vol.`;
  if (text.includes('Gradazione alcolica')) return text;

  return text ? `${text}\n\n${suffix}` : suffix;
}
