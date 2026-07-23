import Link from "next/link"

export default function Banner() {
    return (
        <section className="banner-section p_relative centred">
            <div className="banner-carousel">
                <div className="slide-item p_relative">
                    <div className="image-layer p_absolute" style={{ backgroundImage: 'url(assets/images/banner/banner-1.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="content-box p_relative d_block z_5">
                            <span className="special-text p_relative d_block">Ristorante Siciliano</span>
                            <h2 className="p_relative d_block">La Cantina di Monsignore</h2>
                            <p className="p_relative d_block">
                                Nel borgo di Castiglione di Sicilia, tra l&apos;Etna e la Valle dell&apos;Alcantara
                            </p>
                            <div className="btn-box">
                                <Link href="/#prenotazioni" className="theme-btn-one">Riserva un tavolo</Link>
                                <Link href="/menu" className="theme-btn-one banner-btn-secondary">Scopri il menù</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
