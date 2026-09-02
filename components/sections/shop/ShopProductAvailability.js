import { getShopAvailability } from '@/lib/shopProducts';

export default function ShopProductAvailability({ availability = 'available' }) {
  const { label, modifier } = getShopAvailability(availability);

  return (
    <p className={`shop-product-availability shop-product-availability--${modifier}`}>
      <span className="shop-product-availability__dot" aria-hidden="true" />
      <span>{label}</span>
    </p>
  );
}
