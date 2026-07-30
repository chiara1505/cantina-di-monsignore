'use client';

import Layout from '@/components/layout/Layout';
import DishesMenuPage from '@/components/sections/menu/DishesMenuPage';
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages';

export default function MenuPiattiPageClient({ dishes }) {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="I Piatti" breadcrumbImage={PAGE_TITLE_IMAGES.menu}>
      <DishesMenuPage dishes={dishes} />
    </Layout>
  );
}
