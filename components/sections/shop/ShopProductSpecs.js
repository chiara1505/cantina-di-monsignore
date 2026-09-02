/** @type {const} */
export const SHOP_PRODUCT_SPEC_FIELDS = [
  { key: 'denominazione', label: 'Denominazione' },
  { key: 'produttore', label: 'Produttore' },
  { key: 'zonaDiProduzione', label: 'Zona di Produzione' },
  { key: 'formato', label: 'Formato' },
];

export default function ShopProductSpecs({ specs }) {
  if (!specs) return null;

  const items = SHOP_PRODUCT_SPEC_FIELDS.filter(({ key }) => specs[key]);

  if (!items.length) return null;

  return (
    <div className="other-option mb_30 shop-product-page__details">
      <ul className="list">
        {items.map(({ key, label }) => (
          <li key={key}>
            <span>{label}: </span>
            {specs[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}
