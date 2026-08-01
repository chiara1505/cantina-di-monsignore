'use client';

import Link from 'next/link';
import { SITE_NAV_ITEMS } from '@/lib/siteNavigation';

export default function Menu() {
  return (
    <ul className="navigation clearfix">
      {SITE_NAV_ITEMS.map((item) =>
        item.children?.length ? (
          <li key={item.href} className="dropdown">
            <Link href={item.href}>{item.label}</Link>
            <ul>
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link href={child.href}>{child.label}</Link>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ),
      )}
    </ul>
  );
}
