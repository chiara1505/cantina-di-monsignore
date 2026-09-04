import { getMenuWines } from '@/lib/getMenuWines';
import { PAGE_METADATA } from '@/lib/pageMetadata';
import MenuViniPageClient from './MenuViniPageClient';

export const metadata = PAGE_METADATA.wines;
export const revalidate = 60;

export default async function MenuViniPage() {
  const wines = await getMenuWines();

  return <MenuViniPageClient wines={wines} />;
}
