import '@/lib/font'
import "@/node_modules/react-modal-video/css/modal-video.css"
import "../../public/assets/css/bootstrap.css"
import "../../public/assets/css/color.css"
import "../../public/assets/css/style.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';

export const metadata = {
    title: 'Cantina di Monsignore',
    description: 'Ristorante a Castiglione di Sicilia',
}

export default function FrontendLayout({ children }) {
    return (
        <html lang="it" suppressHydrationWarning>
            <body suppressHydrationWarning>{children}</body>
        </html>
    )
}
