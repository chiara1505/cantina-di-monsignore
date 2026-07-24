import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/393888988098";

export default function BackToTop({ scroll }) {
    return (
        <div className="floating-actions">
            <a
                className="floating-action floating-action--whatsapp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contattaci su WhatsApp"
            >
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
            {scroll && (
                <Link className="floating-action scroll-to-top scroll-to-target" href="#top" aria-label="Torna su">
                    <i className="fas fa-angle-up" aria-hidden="true"></i>
                </Link>
            )}
        </div>
    );
}
