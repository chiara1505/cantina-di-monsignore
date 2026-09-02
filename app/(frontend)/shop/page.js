import { PAGE_METADATA } from '@/lib/pageMetadata';
import { getShopCatalogProducts } from '@/lib/shopProducts';
import { Suspense } from 'react';
import ShopPageClient from './ShopPageClient';

export const metadata = PAGE_METADATA.shop;

export default function ShopPage() {
  const products = getShopCatalogProducts();

  return (
    <Suspense fallback={null}>
      <ShopPageClient products={products} />
    </Suspense>
  );
}
