import { notFound } from 'next/navigation';
import {
  getAllShopProductSlugs,
  getRelatedShopProducts,
  getShopProductBySlug,
} from '@/lib/shopProducts';
import { buildShopProductMetadata } from '@/lib/pageMetadata';
import { generateBreadcrumbSchema } from '@/lib/generateBreadcrumbSchema';
import ShopProductPageClient from './ShopProductPageClient';

export function generateStaticParams() {
  return getAllShopProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getShopProductBySlug(slug);

  if (!product) {
    return {};
  }

  return buildShopProductMetadata(product);
}

export default async function ShopProductPage({ params }) {
  const { slug } = await params;
  const product = getShopProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedShopProducts(slug);
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: product.name, path: `/shop/${product.slug}` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ShopProductPageClient
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
