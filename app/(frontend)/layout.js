import '@/lib/font'
import "@/node_modules/react-modal-video/css/modal-video.css"
import "../../public/assets/css/bootstrap.css"
import "../../public/assets/css/color.css"
import "../../public/assets/css/style.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { DEFAULT_METADATA } from '@/lib/pageMetadata';
import CookieConsent from '@/components/elements/CookieConsent';

export const metadata = DEFAULT_METADATA;

export default function FrontendLayout({ children }) {
    return (
        <html lang="it" suppressHydrationWarning>
            <body suppressHydrationWarning>
                {children}
                <CookieConsent />
            </body>
        </html>
    )
}
