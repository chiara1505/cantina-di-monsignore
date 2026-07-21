
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>

             <div className="filters centred mb_60">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>View All </li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Gourmet</li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Restaurant</li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Turist </li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Wedding</li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                <div className="gallery-block-two">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/gallery/gallery-7.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <div className="view-btn">
                      <Link href="assets/images/gallery/gallery-7.jpg" className="lightbox-image" data-fancybox="gallery">
                        <i className="icon-16"></i>
                      </Link>
                    </div>
                    <div className="text">
                      <p>Tourist Guide</p>
                      <h3>
                        <Link href="index-3.html">Main Tourist Spots</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
                <div className="gallery-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/gallery-8.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="view-btn"><Link href="assets/images/gallery/gallery-8.jpg" className="lightbox-image" data-fancybox="gallery">
                                            <i className="icon-16"></i></Link></div>
                                        <div className="text">
                                            <p>Tourist Guide</p>
                                            <h3><Link href="index-3">Main Tourist Spots</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12">
                <div className="gallery-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/gallery-9.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="view-btn"><Link href="assets/images/gallery/gallery-9.jpg" className="lightbox-image" data-fancybox="gallery">
                                            <i className="icon-16"></i></Link></div>
                                        <div className="text">
                                            <p>Tourist Guide</p>
                                            <h3><Link href="index-3">Main Tourist Spots</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            </div>
                
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-12">
                <div className="gallery-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/gallery-10.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="view-btn"><Link href="assets/images/gallery/gallery-10.jpg" className="lightbox-image" data-fancybox="gallery">
                                            <i className="icon-16"></i></Link></div>
                                        <div className="text">
                                            <p>Tourist Guide</p>
                                            <h3><Link href="index-3">Main Tourist Spots</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-2 cat-1 col-lg-4 col-md-6 col-sm-12">
                <div className="gallery-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/gallery-11.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="view-btn"><Link href="assets/images/gallery/gallery-11.jpg" className="lightbox-image" data-fancybox="gallery">
                                            <i className="icon-16"></i></Link></div>
                                        <div className="text">
                                            <p>Tourist Guide</p>
                                            <h3><Link href="index-3">Main Tourist Spots</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-2 cat-3 col-lg-4 col-md-6 col-sm-12">
                <div className="gallery-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/gallery-12.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="view-btn"><Link href="assets/images/gallery/gallery-12.jpg" className="lightbox-image" data-fancybox="gallery"> 
                                        <i className="icon-16"></i></Link></div>
                                        <div className="text">
                                            <p>Tourist Guide</p>
                                            <h3><Link href="index-3">Main Tourist Spots</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </>
    )
}
