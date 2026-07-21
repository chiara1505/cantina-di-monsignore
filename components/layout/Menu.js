'use client'
import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Poppinsior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                        <li><Link href="/index-4">One Page Home</Link></li>
                        <li className="dropdown"><Link href="/">Header Style</Link>
                            <ul>
                                <li><Link href="/">Header Style-01</Link></li>
                                <li><Link href="/index-2">Header Style-02</Link></li>
                                <li><Link href="/index-3">Header Style-03</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="/service">Services</Link></li>

                
                {/* Pages */}
                <li className="dropdown"><Link href="/">Pages</Link>
                    <ul>
                    
                        <li className="dropdown"><Link href="/">Gallery</Link>
                            <ul>
                                <li><Link href="/gallery">Gallery One</Link></li>
                                <li><Link href="/gallery1">Gallery Two</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="/">Team</Link>
                            <ul>
                                <li><Link href="/team">Our Team</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/menu">Menu Page</Link></li>
                        <li><Link href="/testmonial">Testimonials</Link></li>
                        <li><Link href="/faq">Faq's</Link></li>
                        <li><Link href="/reservation">Reservation</Link></li>
                        <li><Link href="/error-page">404</Link></li>
                    </ul>
                </li>
              
                <li className="dropdown"><Link href="/">Shop</Link>
                            <ul>
                                <li><Link href="/shop">Our Shop</Link></li>
                                <li><Link href="/shop-details">Shop Details</Link></li>
                                <li><Link href="/cart">Cart</Link></li>
                                <li><Link href="/checkout">Checkout</Link></li>
                            </ul>
                        </li>
               
                <li className="dropdown"><Link href="/">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-2">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                {/* Contact */}
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </>
    )
}
