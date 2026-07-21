'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                
                {/* Header Upper */}
                <div className="header-lower">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><img src="assets/images/logo-2.png" alt="" /></Link></figure>
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
                           
                            <li className="search-box-outer search-toggler" onClick={handlePopup}>
                            <i className="icon-3"></i>
                            </li>
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
                        <div className="menu-area clearfix">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu/>
                                </div>
                            </nav>
                            </div>
                            <ul className="nav-right">
                           
                            <li className="search-box-outer search-toggler" onClick={handlePopup}>
                            <i className="icon-3"></i>
                            </li>
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
