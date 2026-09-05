'use client';

import Link from 'next/link';
import { useShopCart } from '@/components/providers/ShopCartProvider';

export default function HeaderCartLink() {
  const { itemCount, isHydrated } = useShopCart();
  const count = isHydrated ? itemCount : 0;

  return (
    <li className="shop-cart">
      <Link href="/cart" aria-label={count > 0 ? `Carrello, ${count} articoli` : 'Carrello'}>
        <i className="icon-4" aria-hidden="true"></i>
        {count > 0 ? <span>{count}</span> : null}
      </Link>
    </li>
  );
}
