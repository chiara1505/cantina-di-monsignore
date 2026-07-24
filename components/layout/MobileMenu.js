'use client'
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}><span className="fas fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/logo-2.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="/">Home</Link>
                  <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                    <li><Link href="/" onClick={handleMobileMenu}>Home Page 01</Link></li>
                    <li><Link href="/index-2" onClick={handleMobileMenu}>Home Page 02</Link></li>
                    <li><Link href="/index-3" onClick={handleMobileMenu}>Home Page 03</Link></li>
                    <li><Link href="/index-4" onClick={handleMobileMenu}>OnePage Home</Link></li>
                  </ul>
                  <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/about-us" onClick={handleMobileMenu}>Il Ristorante</Link></li>
                <li><Link href="/service" onClick={handleMobileMenu}>Services</Link></li>

                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                  <Link href="/#">Pages</Link>
                  <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                    <li className={isActive.subMenuKey == 4 ? "dropdown current" : "dropdown"}>
                      <Link href="/#">Gallery</Link>
                      <ul style={{ display: `${isActive.subMenuKey == 4 ? "block" : "none"}` }}>
                        <li><Link href="/gallery" onClick={handleMobileMenu}>Gallery One</Link></li>
                        <li><Link href="/gallery1" onClick={handleMobileMenu}>Gallery Two</Link></li>
                      </ul>
                      <div className={isActive.subMenuKey == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 4)}><span className="fa fa-angle-right" /></div>
                    </li>
                    <li className={isActive.subMenuKey == 5 ? "dropdown current" : "dropdown"}>
                      <Link href="/#">Team</Link>
                      <ul style={{ display: `${isActive.subMenuKey == 5 ? "block" : "none"}` }}>
                        <li><Link href="/team" onClick={handleMobileMenu}>Our Team</Link></li>
                        <li><Link href="/team-details" onClick={handleMobileMenu}>Team Details</Link></li>
                      </ul>
                      <div className={isActive.subMenuKey == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 5)}><span className="fa fa-angle-right" /></div>
                    </li>
                        <li><Link href="/menu" onClick={handleMobileMenu}>Menu Page</Link></li>
                        <li><Link href="/testmonial" onClick={handleMobileMenu}>Testimonials</Link></li>
                        <li><Link href="/faq" onClick={handleMobileMenu}>Faq's</Link></li>
                        <li><Link href="/reservation" onClick={handleMobileMenu}>Reservation</Link></li>
                        <li><Link href="/error-page" onClick={handleMobileMenu}>404</Link></li>
                        </ul>
                  <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                </li>

                    <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Shop</Link>
                      <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link href="/shop" onClick={handleMobileMenu}>Our Shop</Link></li>
                        <li><Link href="/shop-details" onClick={handleMobileMenu}>Shop Details</Link></li>
                        <li><Link href="/cart" onClick={handleMobileMenu}>Cart</Link></li>
                        <li><Link href="/checkout" onClick={handleMobileMenu}>Checkout</Link></li>
                      </ul>
                      <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                    </li>
                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                         <li><Link href="/blog" onClick={handleMobileMenu}>Blog Grid</Link></li>
                        <li><Link href="/blog-2" onClick={handleMobileMenu}>Blog Standard</Link></li>
                        <li><Link href="/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                </li>
               
                <li><Link href="/contact" onClick={handleMobileMenu}>Contatti</Link></li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Chicago 12, Melborne City, USA</li>
                        <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
                        <li><Link href="mailto:info@example.com">info@example.com</Link></li>
                    </ul>
                </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
              <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
              <li><Link href="/#"><span className="fab fa-ppoppinsest-p" /></Link></li>
              <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
              <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
            </ul>
          </div>
        </nav>
      </div>{/* End Mobile Menu */}
      <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
    </>
  );
};

