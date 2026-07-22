import Link from "next/link";

export default function About() {
  return (
    <section className="about-section sec-pad">
      <div className="auto-container">
        <div className="row clearfix align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box">
                <div className="sec-title mb_30">
                  <span className="sub-title">La Location</span>
                  <h2>Fuori, la tranquillità del borgo. Dentro, l&apos;essenza del territorio etneo</h2>
                </div>
                <div className="text">
                  <p>Nascosto tra i vicoli di Castiglione di Sicilia, il ristorante La Cantina di Monsignore è la ricompensa per chi sa cercare. Piatti del territorio dal tocco contemporaneo, ingredienti locali e tutto il calore dell&apos;ospitalità siciliana.</p>
                </div>
                <div className="btn-box">
                  <Link href="about" className="theme-btn-one">Scopri il Ristorante</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <figure className="about-location-image">
              <img
                src="assets/images/resource/about-1.png"
                alt="La Cantina di Monsignore - location"
                width={604}
                height={734}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
