'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages'

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Grid" breadcrumbImage={PAGE_TITLE_IMAGES.blog}>
                <div>
                    {/* news-style-two */}
                    <section className="news-section blog-grid">
            <div className="auto-container">
                <div className="row clearfix">
                    {/* Repeat the following block for each news item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-1.jpg" alt="" /></Link></figure>
                                    <div className="date">15 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">Right Way to Make Cold Coffee</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">0 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-2.jpg" alt="" /></Link></figure>
                                    <div className="date">12 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">Truly Amazing Blueberry Recipes</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">4 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-3.jpg" alt="" /></Link></figure>
                                    <div className="date">11 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">The benefits of Buffalo Meat</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">1 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-4.jpg" alt="" /></Link></figure>
                                    <div className="date">10 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">Right Way to Make Cold Coffee</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">3 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-5.jpg" alt="" /></Link></figure>
                                    <div className="date">09 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">Truly Amazing Blueberry Recipes</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">5 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-6.jpg" alt="" /></Link></figure>
                                    <div className="date">08 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">The benefits of Buffalo Meat</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">0 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-7.jpg" alt="" /></Link></figure>
                                    <div className="date">07 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">Right Way to Make Cold Coffee</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">2 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-8.jpg" alt="" /></Link></figure>
                                    <div className="date">06 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">Truly Amazing Blueberry Recipes</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">8 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-9.jpg" alt="" /></Link></figure>
                                    <div className="date">05 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">The benefits of Buffalo Meat</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">9 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-10.jpg" alt="" /></Link></figure>
                                    <div className="date">04 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">Right Way to Make Cold Coffee</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">2 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-11.jpg" alt="" /></Link></figure>
                                    <div className="date">03 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">Truly Amazing Blueberry Recipes</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">5 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-12.jpg" alt="" /></Link></figure>
                                    <div className="date">02 <span>APRIL</span></div>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="blog-details">The benefits of Buffalo Meat</Link></h3>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                        <li><i className="icon-11"></i><Link href="blog-details">6 Comment</Link></li>
                                    </ul>
                                    <p>In ornare pellentesque sed elementum sed ac adipiscing suscipit.</p>
                                    <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-wrapper centred">
                    <ul className="pagination clearfix">
                        <li><Link href="blog"><i className="icon-29"></i></Link></li>
                        <li><Link href="blog" className="current">1</Link></li>
                        <li><Link href="blog">2</Link></li>
                        <li><Link href="blog">3</Link></li>
                        <li><Link href="blog"><i className="icon-30"></i></Link></li>
                    </ul>
                </div>
            </div>
        </section>
                    {/* news-style-two end */}
             </div>
           

            </Layout>
        </>
    )
}