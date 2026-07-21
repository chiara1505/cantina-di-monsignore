
'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Standard">
                <div>
                    {/* sidebar-page-container */}
                    <section className="sidebar-page-container p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="blog-standard-content">
                            <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-13.jpg" alt="" /></Link></figure>
                                        <div className="date">15 <span>APRIL</span></div>
                                    </div>
                                    <div className="lower-content">
                                        <h2><Link href="blog-details">Right Way to Make Cold Coffee</Link></h2>
                                        <ul className="post-info clearfix">
                                            <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                            <li><i className="icon-11"></i><Link href="blog-details">0 Comment</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis quis cras neque. Sodales ultrices sed lobortis blandit libero tellus consequat integer iaculis. Adipiscing pellentesque sit suscipit venenatis ipsum turpis bibendum.</p>
                                        <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-14.jpg" alt="" /></Link></figure>
                                        <div className="date">14 <span>APRIL</span></div>
                                    </div>
                                    <div className="lower-content">
                                        <h2><Link href="blog-details">Truly Amazing Blueberry Recipes</Link></h2>
                                        <ul className="post-info clearfix">
                                            <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                            <li><i className="icon-11"></i><Link href="blog-details">3 Comment</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis quis cras neque. Sodales ultrices sed lobortis blandit libero tellus consequat integer iaculis. Adipiscing pellentesque sit suscipit venenatis ipsum turpis bibendum.</p>
                                        <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-15.jpg" alt="" /></Link></figure>
                                        <div className="date">12 <span>APRIL</span></div>
                                    </div>
                                    <div className="lower-content">
                                        <h2><Link href="blog-details">The benefits of Buffalo Meat</Link></h2>
                                        <ul className="post-info clearfix">
                                            <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                            <li><i className="icon-11"></i><Link href="blog-details">6 Comment</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis quis cras neque. Sodales ultrices sed lobortis blandit libero tellus consequat integer iaculis. Adipiscing pellentesque sit suscipit venenatis ipsum turpis bibendum.</p>
                                        <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-16.jpg" alt="" /></Link></figure>
                                        <div className="date">11 <span>APRIL</span></div>
                                    </div>
                                    <div className="lower-content">
                                        <h2><Link href="blog-details">24 Reasons To Seek Out Fresh Figs</Link></h2>
                                        <ul className="post-info clearfix">
                                            <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                            <li><i className="icon-11"></i><Link href="blog-details">1 Comment</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis quis cras neque. Sodales ultrices sed lobortis blandit libero tellus consequat integer iaculis. Adipiscing pellentesque sit suscipit venenatis ipsum turpis bibendum.</p>
                                        <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="blog-details"><img src="assets/images/news/news-17.jpg" alt="" /></Link></figure>
                                        <div className="date">10 <span>APRIL</span></div>
                                    </div>
                                    <div className="lower-content">
                                        <h2><Link href="blog-details">Right Way to Make Thai Food</Link></h2>
                                        <ul className="post-info clearfix">
                                            <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                            <li><i className="icon-11"></i><Link href="blog-details">5 Comment</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis quis cras neque. Sodales ultrices sed lobortis blandit libero tellus consequat integer iaculis. Adipiscing pellentesque sit suscipit venenatis ipsum turpis bibendum.</p>
                                        <div className="btn-box"><Link href="blog-details" className="theme-btn-two">Read More</Link></div>
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
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="blog-sidebar ml_40">
                            <div className="sidebar-widget search-widget">
                                <div className="widget-title">
                                    <h3>Search</h3>
                                </div>
                                <div className="search-inner">
                                    <form action="blog-2" method="post">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Search..." required="" />
                                            <button type="submit"><i className="icon-3"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="sidebar-widget category-widget">
                                <div className="widget-title">
                                    <h3>Categories</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="category-list clearfix">
                                        <li><Link href="blog-details">Food</Link></li>
                                        <li><Link href="blog-details">Reciepes</Link></li>
                                        <li><Link href="blog-details">Healthy Food</Link></li>
                                        <li><Link href="blog-details">Fast Food</Link></li>
                                        <li><Link href="blog-details">Cooking</Link></li>
                                        <li><Link href="blog-details">Tips & Tricks</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget post-widget">
                                <div className="widget-title">
                                    <h3>Latest News</h3>
                                </div>
                                <div className="post-inner">
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/news/post-1.jpg" alt="" /></Link></figure>
                                        <h4><Link href="blog-details">The benefits of Buffalo Meat</Link></h4>
                                        <span className="post-date"><i className="icon-13"></i>Apr 17, 2022</span>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/news/post-2.jpg" alt="" /></Link></figure>
                                        <h4><Link href="blog-details">24 Reasons To Seek Out Fresh Figs</Link></h4>
                                        <span className="post-date"><i className="icon-13"></i>Apr 16, 2022</span>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/news/post-3.jpg" alt="" /></Link></figure>
                                        <h4><Link href="blog-details">Right Way to Make Thai Food</Link></h4>
                                        <span className="post-date"><i className="icon-13"></i>Apr 15, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-widget gallery-widget">
                                <div className="widget-title">
                                    <h3>Photo Gallery</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="image-list clearfix">
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-1.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-2.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-3.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-4.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-5.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-6.jpg" alt="" /></Link></figure>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget category-widget archives-widget">
                                <div className="widget-title">
                                    <h3>Archives</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="category-list clearfix">
                                        <li><Link href="blog-details">July 2021</Link></li>
                                        <li><Link href="blog-details">June 2021</Link></li>
                                        <li><Link href="blog-details">May 2021</Link></li>
                                        <li><Link href="blog-details">March 2021</Link></li>
                                        <li><Link href="blog-details">February 2021</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget tags-widget">
                                <div className="widget-title">
                                    <h3>Popular Tags</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="tags-list clearfix">
                                        <li><Link href="blog-details">Blueberry</Link></li>
                                        <li><Link href="blog-details">Catering</Link></li>
                                        <li><Link href="blog-details">Cook</Link></li>
                                        <li><Link href="blog-details">Delicious</Link></li>
                                        <li><Link href="blog-details">Healthy</Link></li>
                                        <li><Link href="blog-details">Desert</Link></li>
                                        <li><Link href="blog-details">Special</Link></li>
                                        <li><Link href="blog-details">Dining</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* sidebar-page-container end */}
                </div>

            </Layout>
        </>
    )
}
