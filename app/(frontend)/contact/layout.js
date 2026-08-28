import { PAGE_METADATA } from '@/lib/pageMetadata';
import { generateContactSchema } from '@/lib/generateContactSchema';

export const metadata = PAGE_METADATA.contact;

export default function ContactLayout({ children }) {
  const contactSchema = generateContactSchema();

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
