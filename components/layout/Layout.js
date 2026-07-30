
'use client'
import { useEffect, useState } from "react";

import BackToTop from '../elements/BackToTop';
import DataBg from "../elements/DataBg";
import Breadcrumb from './Breadcrumb';
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages';
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";
import Footer1 from './footer/Footer1';
import Header1 from "./header/Header1";
import Header2 from './header/Header2';
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, breadcrumbImage = PAGE_TITLE_IMAGES.default, breadcrumbImagePosition, breadcrumbClassName, children, wrapperCls }) {
    const [fixedHeader, setFixedHeader] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [mobileHeaderHidden, setMobileHeaderHidden] = useState(false);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        document.body.classList.toggle("mobile-menu-visible", !isMobileMenu);
    };
    const [isPopup, setPopup] = useState(false);
    const handlePopup = () => setPopup(!isPopup);
    const [isSidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!isSidebar);

    useEffect(() => {
        let cancelled = false

        import('wowjs/dist/wow.js').then((mod) => {
            if (cancelled) return

            const WowConstructor =
                (typeof mod?.WOW === 'function' && mod.WOW) ||
                (typeof mod?.default?.WOW === 'function' && mod.default.WOW) ||
                (typeof mod?.default === 'function' && mod.default) ||
                (typeof window.WOW === 'function' && window.WOW)

            if (!WowConstructor) return

            const wow = new WowConstructor({ live: false })
            wow.init()
            window.wow = wow
        })

        const desktopHeaderQuery = window.matchMedia('(min-width: 1201px)')

        const onScroll = () => {
            const isDesktop = desktopHeaderQuery.matches
            const scrollY = window.scrollY
            const scrolled = scrollY > 100

            setShowBackToTop(scrolled)
            setFixedHeader(isDesktop && scrolled)
            setMobileHeaderHidden(
                !isDesktop &&
                scrollY > 40 &&
                !document.body.classList.contains('mobile-menu-visible')
            )
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        desktopHeaderQuery.addEventListener('change', onScroll)
        return () => {
            cancelled = true
            window.removeEventListener('scroll', onScroll)
            desktopHeaderQuery.removeEventListener('change', onScroll)
        }
    }, [])

    return (
        <>
            <DataBg />
            <div className={`boxed_wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                {(headerStyle === 1 || !headerStyle) && <Header1 scroll={fixedHeader} mobileHeaderHidden={mobileHeaderHidden} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle === 2 && <Header2 scroll={fixedHeader} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle === 3 && <Header3 scroll={fixedHeader} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle === 4 && <Header4 scroll={fixedHeader} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && (
                  <Breadcrumb
                    breadcrumbTitle={breadcrumbTitle}
                    breadcrumbImage={breadcrumbImage}
                    breadcrumbImagePosition={breadcrumbImagePosition}
                    breadcrumbClassName={breadcrumbClassName}
                  />
                )}

                {children}

                {(footerStyle === 1 || !footerStyle) && <Footer1 />}
            </div>
            <BackToTop scroll={showBackToTop} />
        </>
    );
}
