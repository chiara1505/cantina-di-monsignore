'use client';

import Layout from '@/components/layout/Layout';
import WinesMenuPage from '@/components/sections/menu/WinesMenuPage';
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages';

export default function MenuViniPage() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="La Carta dei Vini"
      breadcrumbPath="/menu/vini"
      breadcrumbImage={PAGE_TITLE_IMAGES.menuWines}
    >
      <WinesMenuPage />
    </Layout>
  );
}
