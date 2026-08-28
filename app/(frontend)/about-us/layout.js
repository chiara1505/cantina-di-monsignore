import { PAGE_METADATA } from '@/lib/pageMetadata';
import { generateAboutSchema } from '@/lib/generateAboutSchema';

export const metadata = PAGE_METADATA.about;

export default function AboutLayout({ children }) {
  const aboutSchema = generateAboutSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
