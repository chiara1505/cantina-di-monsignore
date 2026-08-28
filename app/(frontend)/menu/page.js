import { getMenuDishes } from '@/lib/getMenuDishes';
import { generateMenuSchema } from '@/lib/generateMenuSchema';
import { PAGE_METADATA } from '@/lib/pageMetadata';
import MenuPiattiPageClient from './MenuPiattiPageClient';

export const metadata = PAGE_METADATA.menu;
export const revalidate = 60;

export default async function MenuPiattiPage() {
  const dishes = await getMenuDishes();
  const menuSchema = generateMenuSchema(dishes);

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
