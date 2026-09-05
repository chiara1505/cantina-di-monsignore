import '@/lib/font'
import "@/node_modules/react-modal-video/css/modal-video.css"
import "../../public/assets/css/bootstrap.css"
import "../../public/assets/css/color.css"
import "../../public/assets/css/style.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { DEFAULT_METADATA, getMetadataBaseUrl } from '@/lib/pageMetadata';
import CookieConsent from '@/components/elements/CookieConsent';
import { RestaurantSettingsProvider } from '@/components/providers/RestaurantSettingsProvider';
import { ShopCartProvider } from '@/components/providers/ShopCartProvider';
import { getRestaurantSettings } from '@/lib/getRestaurantSettings';

export const metadata = {
  metadataBase: getMetadataBaseUrl(),
  ...DEFAULT_METADATA,
};

export const revalidate = 60

export default async function FrontendLayout({ children }) {
    const settings = await getRestaurantSettings()

    return (
        <html lang="it" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <RestaurantSettingsProvider settings={settings}>
                    <ShopCartProvider>
                        {children}
                    </ShopCartProvider>
                </RestaurantSettingsProvider>
                <CookieConsent />
            </body>
        </html>
    )
}
