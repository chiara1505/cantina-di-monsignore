import { getMenuWines } from '@/lib/getMenuWines';
import { generateWineMenuSchema } from '@/lib/generateWineMenuSchema';
import { getRestaurantSettings } from '@/lib/getRestaurantSettings';
import { PAGE_METADATA } from '@/lib/pageMetadata';
import MenuViniPageClient from './MenuViniPageClient';

export const metadata = PAGE_METADATA.wines;
export const revalidate = 60;

export default async function MenuViniPage() {
  const [wines, settings] = await Promise.all([getMenuWines(), getRestaurantSettings()]);
  const wineMenuSchema = generateWineMenuSchema(settings);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wineMenuSchema) }}
      />
      <MenuViniPageClient wines={wines} />
    </>
  );
}
