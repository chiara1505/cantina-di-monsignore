import Link from "next/link"

export default function Banner() {
    return (
        <section className="banner-section p_relative centred">
            <div className="banner-carousel">
                <div className="slide-item p_relative">
                    <div className="image-layer p_absolute" style={{ backgroundImage: 'url(assets/images/banner/banner-1.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="content-box p_relative d_block z_5">
                            <span className="animation_text_word special-text p_relative d_block"></span>
                            <h2 className="p_relative d_block">We Serve Quality Food</h2>
                            <p className="p_relative d_block">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />Turpis ridiculus tellus.</p>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn-one">Make Reservation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
