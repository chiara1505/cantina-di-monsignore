'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages'
import Link from "next/link"
import React, { useState } from 'react';
export default function Home() {
    const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    // Additional logic if needed
  };
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Shop Details" breadcrumbImage={PAGE_TITLE_IMAGES.shopDetails}>
                <div>
                    {/* shop-details style- */}
                    <section className="shop-details p_relative">
      <div className="shop-details-content">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image-box">
                <Link href="assets/images/shop/shop-17.png" className="lightbox-image" data-fancybox="gallery">
                  <img src="assets/images/shop/shop-17.png" alt="" />
                </Link>
              </figure>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <h2>Chicken & vegetable fry</h2>
                <h4>$20.00</h4>
                <div className="customer-rating clearfix">
                  <ul className="rating pull-left">
                    <li><i className="icon-7"></i></li>
                    <li><i className="icon-7"></i></li>
                    <li><i className="icon-7"></i></li>
                    <li className="light"><i className="icon-7"></i></li>
                    <li className="light"><i className="icon-7"></i></li>
                  </ul>
                  <div className="review pull-left">
                    <Link href="shop-details">(2 Customer Reviews)</Link>
                  </div>
                </div>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper sagittis dolor aliquet quam feugiat nisi a ultrices feugiat. Viverra facilisi turpis eget tempor. Mattis risus amet euismod eleifend.</p>
                  <p>Dictum tellus sollicitudin senectus. Eu nullam posuere aliquet bibendum id sed ipsum semper. Feugiat augue parturient id enim.</p>
                </div>


                                <div className="addto-cart-box p_relative d_block mb_35">
                                   
                                        <ul className="clearfix">
                                            <li className="item-quantity p_relative d_block float_left mr_10">
                                            <div className="quantity-spinner">
                                                <QuantityInput />
                                            </div>
                                            </li>
                                            <li className="p_relative d_block float_left mr_10"><button type="button" className="theme-btn-one"><span>Add To Cart</span></button></li>
                                            <li className="like-box p_relative d_block float_left"><Link href="shop-details" className="d_iblock p_relative fs_20 lh_55 w_50 h_50 centred b_radius_50"><i className="icon-33"></i></Link></li>
                                            
                                        </ul>
                                  
                                </div>
                                <div className="other-option mb_30">
                                <ul className="list">
                    <li><span>Category: </span> <Link href="shop-details"> Chicken</Link>, <Link href="shop-details">Lunch</Link></li>
                    <li><span>Tags:</span> <Link href="shop-details">Healthy</Link>, <Link href="shop-details">Organic</Link>, <Link href="shop-details">Chicken</Link></li>
                  </ul>
                                </div>
                            </div>
                            </div>
                    </div>
                        </div>
                                        <div className="product-discription p_relative d_block">
                                        <div className="auto-container">
                                            <div className="tabs-box">
                                                <div className="tab-btn-box p_relative d_block">
                                                    <ul className="tab-btns tab-buttons centred clearfix">
                                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><span>Description</span></li>
                                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><span>Reviews (1)</span></li>
                                                    </ul>
                                                    <div className="tabs-content">
                                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                                        <div className="content-box">
                                                                    <p className="mb_25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames at egestas amet feugiat laoreet potenti integer. Viverra at maecenas convallis condimentum egestas nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin.</p>
                                                                    <p>Fringilla mauris magna sit elementum elit. Facilisi lacus, pharetra quam eu urna amet aenean. Nunc mattis vitae tellus bibendum a eu, nunc. Consequat commodo ac cursus in donec orci tempus. Massa sed sit faucibus neque ac. Nibh nisl nisl id fermentum habitant consequat. A ornare in dis sit cras natoque morbi. Phasellus senectus tortor sed magnis. Egestas nunc pellentesque egestas gravida amet.</p>
                                                                    </div>
                                                                </div>
                                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="review">

                                                        <div className="customer-inner">
                                                            <div className="customer-review p_relative d_block pb_65 mb_65">
                                                                <h4 className="p_relative d_block fs_20 lh_30 fw_medium fw_bold mb_40">Chicken & vegetable fry</h4>
                                                                <div className="comment-box p_relative d_block pl_110">
                                                                <figure className="comment-thumb p_absolute l_0 t_0 w_80 h_80 b_radius_55">
                                                                    <img src="assets/images/shop/comment-1.jpg" alt="" />
                                                                </figure>
                                                                <h5 className="d_block fs_18 lh_20 fw_sbold">Keanu Reeves<span className="d_iblock fs_16 font_family_poppins"> - May 1, 2021</span></h5>
                                                                <ul className="rating clearfix mb_15">
                                                                    <li className="p_relative d_iblock pull-left mr_3 fs_13"><i className="fas fa-star"></i></li>
                                                                    <li className="p_relative d_iblock pull-left mr_3 fs_13"><i className="fas fa-star"></i></li>
                                                                    <li className="p_relative d_iblock pull-left mr_3 fs_13"><i className="fas fa-star"></i></li>
                                                                    <li className="p_relative d_iblock pull-left mr_3 fs_13"><i className="fas fa-star"></i></li>
                                                                    <li className="p_relative d_iblock pull-left mr_5 fs_13"><i className="far fa-star"></i></li>
                                                                </ul>
                                                                <div className="text">
                                                                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim est laborum. Sed perspiciatis unde omnis natus error sit voluptatem accusa dolore mque laudant totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>
                                                                </div>
                                                                </div>
                                                                <div className="customer-comments p_relative">
                    <h4 className="p_relative d_block fs_20 lh_30 fw_medium fw_sbold mb_25">Be the First to Add a Review</h4>
                    <div className="rating-box clearfix mb_12">
                      <h6 className="p_relative d_iblock fs_16 fw_medium mr_15 float_left">Your Rating</h6>
                      <ul className="rating p_relative d_block clearfix float_left">
                        <li className="p_relative d_iblock fs_12 lh_26 float_left mr_3"><i className="far fa-star"></i></li>
                        <li className="p_relative d_iblock fs_12 lh_26 float_left mr_3"><i className="far fa-star"></i></li>
                        <li className="p_relative d_iblock fs_12 lh_26 float_left mr_3"><i className="far fa-star"></i></li>
                        <li className="p_relative d_iblock fs_12 lh_26 float_left mr_3"><i className="far fa-star"></i></li>
                        <li className="p_relative d_iblock fs_12 lh_26 float_left"><i className="far fa-star"></i></li>
                      </ul>
                    </div>
                    <form action="shop-details" method="post" className="comment-form default-form">
                      <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group mb_15">
                          <label className="p_relative d_block fs_16 mb_3 font_family_poppins">Your Review</label>
                          <textarea name="message"></textarea>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_15">
                          <label className="p_relative d_block fs_16 mb_3 font_family_poppins">Your Name</label>
                          <input type="text" name="name" required="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_15">
                          <label className="p_relative d_block fs_16 mb_3 font_family_poppins">Your Email</label>
                          <input type="email" name="email" required="" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn m_0">
                          <button type="submit" className="theme-btn-one">Submit Your Review</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-product sec-pad">
        <div className="auto-container">
          <div className="title-box centred">
            <h2>Related Products</h2>
          </div>
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
                    <span className="price">$15.00</span>
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
                    <span className="price">$17.00</span>
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
                    <span className="price">$13.00</span>
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
                    <span className="price">$20.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </section>
                    {/* shop-details style end */}
                </div>

            </Layout>
        </>
    )
}