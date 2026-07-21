'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
            <div className="auto-container">
                <div className="top-inner">
                    <div className="left-column">
                        <ul className="info clearfix">
                            <li><i className="icon-1"></i><Link href="mailto:info@example.com">info@example.com</Link></li>
                            <li><i className="icon-2"></i>Open Hours: Mon - Fri 8.00 am - 6.00 pm</li>
                        </ul>
                        <ul className="social-links clearfix">
                            <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                    <div className="right-column">
                        <div className="btn-box">
                            <Link href="/">Book An Table</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                   
                {/* Header Upper */}
                <div className="header-lower">
                    <div className="auto-container">
                    <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                        </div>
                        <div className="menu-area">
                        {/* Mobile Navigation Toggler */}
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        {/* Main Menu */}
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu/>
                            </div>
                        </nav>
                        
                        </div>
                        {/* Menu Right Content */}
                        <ul className="nav-right">
                            <li className="shop-cart">
                            <Link href="shop"><i className="icon-4"></i><span>3</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                        </div>
                       
                            <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu/>
                                </div>
                            </nav>
                            <ul className="nav-right">
                            <li className="shop-cart">
                            <Link href="shop"><i className="icon-4"></i><span>3</span></Link>
                            </li>
                            </ul>
                        
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
