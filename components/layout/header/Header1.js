'use client';

import Link from 'next/link';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';
import { RESERVATION_LINK } from '@/lib/siteNavigation';

export default function Header1({
  scroll,
  mobileHeaderHidden = false,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  return (
    <>
      <header
        className={`main-header header-style-one${scroll ? ' fixed-header' : ''}${mobileHeaderHidden ? ' mobile-header-hidden' : ''}`}
      >
        <div className="header-top">
          <div className="auto-container">
            <div className="top-inner">
              <div className="left-column">
                <ul className="info clearfix">
                  <li>
                    <i className="icon-40"></i>
                    <Link href="tel:+390942090538">0942 09 05 38</Link>
                  </li>
                  <li>
                    <i className="fab fa-whatsapp"></i>
                    <Link href="https://wa.me/393888988098">+39 388 89 88 098</Link>
                  </li>
                  <li>
                    <i className="icon-2"></i>Chiuso il Martedì
                  </li>
                </ul>
              </div>
              <div className="right-column">
                <div className="btn-box">
                  <Link href={RESERVATION_LINK.href}>{RESERVATION_LINK.label}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="/assets/images/logo.png" alt="Cantina di Monsignore" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <Menu />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="/assets/images/logo.png" alt="Cantina di Monsignore" />
                  </Link>
                </figure>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light clearfix">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                  <Menu />
                </div>
              </nav>
            </div>
          </div>
        </div>

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
