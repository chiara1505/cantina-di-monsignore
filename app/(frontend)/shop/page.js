import { PAGE_METADATA } from '@/lib/pageMetadata';
import { getShopCatalogProducts } from '@/lib/getShopProductsFromCms';
import { Suspense } from 'react';
import ShopPageClient from './ShopPageClient';

export const metadata = PAGE_METADATA.shop;
export const revalidate = 60;

export default async function ShopPage() {
  const products = await getShopCatalogProducts();

  return (
    <Suspense fallback={null}>
      <ShopPageClient products={products} />
    </Suspense>
  );
}
