import { getMenuDishes } from '@/lib/getMenuDishes';
import { generateMenuSchema } from '@/lib/generateMenuSchema';
import { getRestaurantSettings } from '@/lib/getRestaurantSettings';
import { PAGE_METADATA } from '@/lib/pageMetadata';
import MenuPiattiPageClient from './MenuPiattiPageClient';

export const metadata = PAGE_METADATA.menu;
export const revalidate = 60;

export default async function MenuPiattiPage() {
  const [dishes, settings] = await Promise.all([getMenuDishes(), getRestaurantSettings()]);
  const menuSchema = generateMenuSchema(settings);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <MenuPiattiPageClient dishes={dishes} />
    </>
  );
}
