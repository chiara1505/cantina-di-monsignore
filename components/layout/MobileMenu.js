'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useShopCart } from '@/components/providers/ShopCartProvider';
import { RESERVATION_LINK, SITE_NAV_ITEMS } from '@/lib/siteNavigation';
import { useRestaurantSettings } from '@/components/providers/RestaurantSettingsProvider';
import SocialLinks from '@/components/elements/SocialLinks';

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
  const { contact } = useRestaurantSettings();
  const { itemCount, isHydrated } = useShopCart();
  const [openDropdown, setOpenDropdown] = useState('');

  const handleToggle = (key) => {
    setOpenDropdown((current) => (current === key ? '' : key));
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="fas fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/footer-logo.png" alt="Cantina di Monsignore" />
            </Link>
          </div>
          <div className="menu-outer">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="navigation clearfix">
                {SITE_NAV_ITEMS.map((item) => {
                  if (!item.children?.length) {
                    return (
                      <li key={item.href}>
                        <Link href={item.href} onClick={handleMobileMenu}>
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  const isOpen = openDropdown === item.label;

                  return (
                    <li key={item.href} className={isOpen ? 'dropdown current' : 'dropdown'}>
                      <Link href={item.href} onClick={handleMobileMenu}>
                        {item.label}
                      </Link>
                      <ul style={{ display: isOpen ? 'block' : 'none' }}>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} onClick={handleMobileMenu}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div
                        className={isOpen ? 'dropdown-btn open' : 'dropdown-btn'}
                        onClick={() => handleToggle(item.label)}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mobile-menu__cta">
            <Link
              href="/cart"
              className="theme-btn-two mobile-menu__cta-btn mobile-menu__cart-btn"
              onClick={handleMobileMenu}
            >
              Carrello{isHydrated && itemCount > 0 ? ` (${itemCount})` : ''}
            </Link>
            <Link
              href={RESERVATION_LINK.href}
              className="theme-btn-one mobile-menu__cta-btn"
              onClick={handleMobileMenu}
            >
              {RESERVATION_LINK.label}
            </Link>
          </div>

          <div className="contact-info">
            <h4>Contatti</h4>
            <ul>
              <li>{contact.address}</li>
              <li>
                <Link href={contact.phoneHref}>{contact.phone}</Link>
              </li>
              <li>
                <Link href={contact.whatsappHref}>{contact.whatsapp}</Link>
              </li>
              <li>
                <Link href={contact.emailHref}>{contact.email}</Link>
              </li>
            </ul>
          </div>

          <SocialLinks className="social-links centred clearfix" useSpan />
        </nav>
      </div>
    </>
  );
}
