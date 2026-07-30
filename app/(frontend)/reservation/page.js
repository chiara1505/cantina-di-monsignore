import Layout from "@/components/layout/Layout";
import Order from "@/components/sections/home1/Order";
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages';

export default function ReservationPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Prenotazioni" breadcrumbImage={PAGE_TITLE_IMAGES.reservation}>
            <Order sectionClassName="reservation-page" sectionId="prenotazione" />
        </Layout>
    );
}
