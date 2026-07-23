'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages'

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details" breadcrumbImage={PAGE_TITLE_IMAGES.blogDetails}>
                {/* sidebar-page-container */}
                <section className="sidebar-page-container p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="blog-details-content">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-13.jpg" alt="" /></figure>
                                        <div className="date">15 <span>APRIL</span></div>
                                    </div>
                                    <div className="lower-content">
                                        <h2>Right Way to Make Cold Coffee</h2>
                                        <ul className="post-info clearfix">
                                            <li><i className="icon-10"></i><Link href="blog-details">Admin</Link></li>
                                            <li><i className="icon-11"></i><Link href="blog-details">0 Comment</Link></li>
                                        </ul>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur fermentum dis penatibus nec maecenas proin. Ac convallis tortor lacus aliquam purus. Faucibus cursus proin sit nisl vulputate. Auctor pharetra, venenatis morbi sit accumsan quis neque. Aliquam sit fermentum morbi sed nisl molestie amet velit pellentesque gravida arcu nunc.</p>
                                            <p>Lectus cursus laoreet quis lectus non risus eget. Vulputate odio nullam sed eget vulputate. Ultrices pellentesque turpis suspendisse risus eget. Dignissim suspendisse magnis lectus diam porttitor augue mollis nisi vitae fermentum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <blockquote>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui pharetra consequat nibh elit urna interdum viera quam a arcu duis quis lectus donec nulla aliquam sit fermentum morbi sed nisl molestie.”</p>
                                <h5>Sandra Bullock</h5>
                            </blockquote>
                            <div className="content-one">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                        <div className="text">
                                            <h3>Benefits of Meat</h3>
                                            <p>Lorem ipsum dolor sit amet consectur adipicing elit. Consectetur fermentum dis penatibus nec maecenas proin convallis tortor lacus aliquam purus. Faucibus cursus proin sit nisl vulputate. Auctor pharetra, venenatis morbi sit accumsan quis neque.</p>
                                            <p>Aliquam sit fermentum morbi sed nisl molestie amet velit pellentesque gravida arcu nunc Lectus cursus laoreet quis.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure className="image"><img src="assets/images/news/news-18.jpg" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="content-two">
                                <div className="text">
                                    <h3>Australian Lamb</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur fermentum dis penatibus nec maecenas proin. Ac convallis tortor lacus aliquam purus. Faucibus cursus proin sit nisl vulputate. Auctor pharetra, venenatis morbi sit accumsan quis neque. Aliquam sit fermentum morbi sed nisl molestie amet velit pellentesque gravida arcu nunc.</p>
                                    <p>Lectus cursus laoreet quis lectus non risus eget. Vulputate odio nullam sed eget vulputate. Ultrices pellentesque turpis suspendisse risus eget. Dignissim suspendisse magnis lectus diam porttitor augue mollis nisi vitae fermentum.</p>
                                </div>
                            </div>
                            <div className="post-tags">
                                <ul className="tags-list clearfix">
                                    <li>Tags:</li>
                                    <li><Link href="blog-details">Restaurant</Link>,</li>
                                    <li><Link href="blog-details">Dining</Link></li>
                                </ul>
                            </div>
                            <div className="author-box">
                                <figure className="author-thumb"><img src="assets/images/news/author-1.jpg" alt="" /></figure>
                                <h4>Sandra Bullock</h4>
                                <span>About Author</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui pharetra consequat nibh elit urna interdum viera quam.</p>
                            </div>
                            <div className="comment-box">
                                <div className="group-title">
                                    <h2>Comments</h2>
                                </div>
                                <div className="comment-inner">
                                    <div className="comment">
                                        <figure className="thumb-box"><img src="assets/images/news/comment-1.jpg" alt="" /></figure>
                                        <div className="comment-info">
                                            <h3>Steven Rich, <span>08 May 2022</span></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui pharetra consequat nibh elit urna interdum viera quam.</p>
                                            <Link href="blog-details" className="reply-btn"><i className="far fa-share"></i>Reply</Link>
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <figure className="thumb-box"><img src="assets/images/news/comment-2.jpg" alt="" /></figure>
                                        <div className="comment-info">
                                            <h3>William Cobus, <span>06 May 2022</span></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui pharetra consequat nibh elit urna interdum viera quam.</p>
                                            <Link href="blog-details" className="reply-btn"><i className="far fa-share"></i>Reply</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-form-area">
                                <div className="group-title">
                                    <h2>Leave A Comments</h2>
                                </div>
                                <div className="form-inner">
                                    <form action="blog-details" method="post">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="name" placeholder="Your name" required="" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Your email" required="" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Type message"></textarea>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                              <button type="submit" className="theme-btn-one">Post Comments</button>  
                                            </div>
                                        </div>
                                    </form>
                                </div>
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
                                        <li><Link href="blog-detail">March 2021</Link></li>
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
  
            </Layout>
        </>
    )
}
