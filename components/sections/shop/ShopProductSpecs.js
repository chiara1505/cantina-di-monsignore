export default function ShopProductSpecs({ specs }) {
  if (!specs?.length) return null;

  return (
    <div className="other-option mb_30 shop-product-page__details">
      <ul className="list">
        {specs.map((spec) => (
          <li key={`${spec.label}-${spec.value}`}>
            <span>{spec.label}: </span>
            {spec.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
