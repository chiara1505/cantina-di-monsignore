import { PAGE_METADATA } from '@/lib/pageMetadata';
import { getShopCatalogProducts } from '@/lib/getShopProductsFromCms';
import { generateShopSchema } from '@/lib/generateShopSchema';
import { Suspense } from 'react';
import ShopPageClient from './ShopPageClient';

export const metadata = PAGE_METADATA.shop;
export const revalidate = 60;

export default async function ShopPage() {
  const products = await getShopCatalogProducts();
  const shopSchema = generateShopSchema(products);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopSchema) }}
      />
      <Suspense fallback={null}>
        <ShopPageClient products={products} />
      </Suspense>
    </>
  );
}
