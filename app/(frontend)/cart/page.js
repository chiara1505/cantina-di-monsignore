import Layout from '@/components/layout/Layout';
import ShopCartPageClient from '@/components/sections/shop/ShopCartPageClient';
import { PAGE_METADATA } from '@/lib/pageMetadata';

export const metadata = PAGE_METADATA.cart;

export default function CartPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} wrapperCls="shop-product-page shop-cart-page">
      <ShopCartPageClient />
    </Layout>
  );
}
