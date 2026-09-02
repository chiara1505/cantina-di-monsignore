'use client';

import Layout from '@/components/layout/Layout';
import ShopProductDetail from '@/components/sections/shop/ShopProductDetail';

export default function ShopProductPageClient({ product, relatedProducts }) {
  return (
    <Layout headerStyle={1} footerStyle={1} wrapperCls="shop-product-page">
      <ShopProductDetail product={product} relatedProducts={relatedProducts} />
    </Layout>
  );
}
