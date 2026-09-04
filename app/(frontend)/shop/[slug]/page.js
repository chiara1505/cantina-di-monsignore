import { notFound } from 'next/navigation';
import {
  getAllShopProductSlugs,
  getRelatedShopProducts,
  getShopProductBySlug,
} from '@/lib/getShopProductsFromCms';
import { buildShopProductMetadata } from '@/lib/pageMetadata';
import { generateShopProductSchema } from '@/lib/generateShopSchema';
import ShopProductPageClient from './ShopProductPageClient';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllShopProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getShopProductBySlug(slug);

  if (!product) {
    return {};
  }

  return buildShopProductMetadata(product);
}

export default async function ShopProductPage({ params }) {
  const { slug } = await params;
  const product = await getShopProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedShopProducts(slug);
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: product.name, path: `/shop/${product.slug}` },
  ];
  const productSchema = generateShopProductSchema(product, breadcrumbItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ShopProductPageClient
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
