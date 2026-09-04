import { PAGE_METADATA } from '@/lib/pageMetadata';
import { generateContactSchema } from '@/lib/generateContactSchema';
import { getRestaurantSettings } from '@/lib/getRestaurantSettings';

export const metadata = PAGE_METADATA.contact;

export default async function ContactLayout({ children }) {
  const settings = await getRestaurantSettings();
  const contactSchema = generateContactSchema(settings);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
