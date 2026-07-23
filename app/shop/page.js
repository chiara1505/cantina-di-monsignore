
'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages'
import React, { useState } from 'react';
export default function Shop() {

    const [viewType, setViewType] = useState('grid');

    const handleGridViewClick = () => {
      setViewType('grid');
    };
  
    const handleListViewClick = () => {
      setViewType('list');
    };

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Shop" breadcrumbImage={PAGE_TITLE_IMAGES.shop}>
                <div>
                   
                    <section className="shop-page-section">
            <div className="auto-container">
                <div className="item-shorting clearfix">
                    <div className="left-column pull-left clearfix">
                        <div className="text"><p>Showing 1–12 of 50 Results</p></div>
                    </div>
                    <div className="right-column pull-right clearfix">
                        <div className="short-box clearfix">
                            <p>Short by</p>
                            <div className="select-box">
                                <select className="wide">
                                   <option data-display="Popularity">Popularity</option>
                                   <option value="1">New Collection</option>
                                   <option value="2">Top Sell</option>
                                   <option value="4">Top Ratted</option>
                                </select>
                            </div>
                        </div>
                        <div className="menu-box">
                        <button
                            className={`grid-view ${viewType === 'grid' ? 'on' : ''}`}
                            onClick={handleGridViewClick}
                            >
                            <i className="icon-27"></i>
                            </button>
                            <button
                            className={`list-view ${viewType === 'list' ? 'on' : ''}`}
                            onClick={handleListViewClick}
                            >
                            <i className="icon-28"></i>
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div className={`wrapper ${viewType}`}>
                    <div className="shop-grid-content">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-1.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$15:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-2.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Penne pasta with meatball</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$17:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-3.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Fried eggs sandwiches</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-4.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Chicken & vegetable fry</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$20:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-5.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast </Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-6.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Penne pasta with meatball</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$10:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-7.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Fried eggs sandwiches</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$20:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-8.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Chicken & vegetable fry</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$22:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-9.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast </Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$16:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-10.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$14:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-11.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Fried eggs sandwiches</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$22:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-12.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Chicken & vegetable fry</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$12:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-13.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$17:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-14.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Penne pasta with meatball</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$12:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-15.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Fried eggs sandwiches</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$15:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-16.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$18:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop-list-content">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-4.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Chicken & vegetable fry</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$20:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-5.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast </Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-6.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Penne pasta with meatball</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$10:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-7.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Fried eggs sandwiches</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$20:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-8.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Chicken & vegetable fry</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$22:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-1.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$15:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-2.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Penne pasta with meatball</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$17:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-3.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Fried eggs sandwiches</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-9.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast </Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$16:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-10.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$14:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-11.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Fried eggs sandwiches</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$22:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-12.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Chicken & vegetable fry</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$12:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-13.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$17:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-14.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Penne pasta with meatball</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$12:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-15.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Fried eggs sandwiches</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$15:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                                <div className="shop-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/shop/shop-16.png" alt="" /></figure>
                                            <div className="btn-box">
                                                <Link href="shop-details" className="theme-btn-one">Add To Cart</Link>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <h5><Link href="shop-details">Strawberry Jam Toast</Link></h5>
                                            <ul className="rating clearfix">
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                                <li><i className="icon-7"></i></li>
                                            </ul>
                                            <span className="price">$18:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-wrapper centred">
                    <ul className="pagination clearfix">
                        <li><Link href="shop"><i className="icon-29"></i></Link></li>
                        <li><Link href="shop" className="current">1</Link></li>
                        <li><Link href="shop">2</Link></li>
                        <li><Link href="shop">3</Link></li>
                        <li><Link href="shop"><i className="icon-30"></i></Link></li>
                    </ul>
                </div>
            </div>
        </section>
                    {/* shop-style end */}
                    
                </div>

            </Layout>
        </>
    )
}

