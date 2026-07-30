'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages'
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Cart Page" breadcrumbImage={PAGE_TITLE_IMAGES.cart}>
                <div>
                    {/* cart */}

    <section className="cart-section p_relative pt_120 pb_120 bg-color-4">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 table-column">
            <div className="table-outer">
              <table className="cart-table">
                <thead className="cart-header">
                  <tr>
                    <th>&nbsp;</th>
                    <th className="prod-column">Product</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th className="price">Price</th>
                    <th className="quantity">Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add your dynamic rows based on the cart items */}
                  {/* Example row, replace with actual cart data */}
                  <tr>
                    <td colSpan="4" className="prod-column">
                      <div className="column-box">
                        <div className="remove-btn">
                          <i className="icon-36"></i>
                        </div>
                        <div className="prod-thumb">
                          <img src="assets/images/shop/cart-1.jpg" alt="" />
                        </div>
                        <div className="prod-title">
                          Chicken & Vegetable Fry
                        </div>
                      </div>
                    </td>
                    <td className="price">$20.00</td>
                    <td className="qty">
                      <div className="item-quantity">
                      <div className="quantity-spinner">
                                                <QuantityInput />
                                            </div>
                      </div>
                    </td>
                    <td className="sub-total">$20.00</td>
                  </tr>
                  <tr>
                                        <td colSpan="4" className="prod-column">
                                            <div className="column-box">
                                                <div className="remove-btn">
                                                    <i className="icon-36"></i>
                                                </div>
                                                <div className="prod-thumb">
                                                    <img src="assets/images/shop/cart-2.jpg" alt="" />
                                                </div>
                                                <div className="prod-title">
                                                    Penne pasta with meatball
                                                </div>    
                                            </div>
                                        </td>
                                        <td className="price">$25.00</td>
                                        <td className="qty">
                                            <div className="item-quantity">
                                            <div className="quantity-spinner">
                                                <QuantityInput />
                                            </div>
                                            </div>
                                        </td>
                                        <td className="sub-total">$25.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4" className="prod-column">
                                            <div className="column-box">
                                                <div className="remove-btn">
                                                    <i className="icon-36"></i>
                                                </div>
                                                <div className="prod-thumb">
                                                    <img src="assets/images/shop/cart-3.jpg" alt="" />
                                                </div>
                                                <div className="prod-title">
                                                    Fried eggs sandwiches
                                                </div>    
                                            </div>
                                        </td>
                                        <td className="price">$23.00</td>
                                        <td className="qty">
                                            <div className="item-quantity">
                                            <div className="quantity-spinner">
                                                <QuantityInput />
                                            </div>
                                            </div>
                                        </td>
                                        <td className="sub-total">$23.00</td>
                                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="othre-content clearfix">
          <div className="coupon-box pull-left clearfix">
            <input type="text" placeholder="Coupon code..." />
            <button type="button" className="theme-btn-one">
              Apply Coupon
            </button>
          </div>
          <div className="update-btn pull-right">
            <button type="button" className="theme-btn-two">
              Update Cart
            </button>
          </div>
        </div>
        <div className="cart-total">
          <div className="row">
            <div className="col-xl-5 col-lg-12 col-md-12 offset-xl-7 cart-column">
              <div className="total-cart-box clearfix">
                <h3 className="fs_20 fw_bold lh_30 d_block pb_20">Cart Totals</h3>
                <ul className="list clearfix mb_30">
                  <li>
                    Subtotal:<span>$20.00</span>
                  </li>
                  <li>
                    Total:<span>$20.00</span>
                  </li>
                </ul>
                <Link href="cart" className="theme-btn-one">
                  Proceed to Checkout <i className="icon-74"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
                    {/* cart */}
             </div>
            </Layout>
        </>
    )
}