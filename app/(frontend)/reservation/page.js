import Layout from "@/components/layout/Layout";
import Order from "@/components/sections/home1/Order";
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages';
import { PAGE_METADATA } from '@/lib/pageMetadata';

export const metadata = PAGE_METADATA.reservation;

export default function ReservationPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Prenotazioni" breadcrumbPath="/reservation" breadcrumbImage={PAGE_TITLE_IMAGES.reservation}>
            <Order sectionClassName="reservation-page" sectionId="prenotazione" />
        </Layout>
    );
}
