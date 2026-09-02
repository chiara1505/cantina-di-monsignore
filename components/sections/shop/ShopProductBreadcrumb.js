import Link from 'next/link';
import { getShopCategoryHref, getShopCategoryLabel } from '@/lib/shopProducts';

export default function ShopProductBreadcrumb({ category }) {
  const categoryLabel = getShopCategoryLabel(category);
  const categoryHref = getShopCategoryHref(category);

  return (
    <nav className="shop-product-breadcrumb" aria-label="Percorso shop">
      <Link href="/shop">Shop</Link>
      <span className="shop-product-breadcrumb__separator" aria-hidden="true">
        &gt;
      </span>
      <Link href={categoryHref}>{categoryLabel}</Link>
    </nav>
  );
}
