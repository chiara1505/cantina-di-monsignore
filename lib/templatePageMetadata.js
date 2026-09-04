import { buildTemplatePageMetadata } from '@/lib/pageMetadata';
import { TEMPLATE_PAGE_DEFINITIONS } from '@/lib/siteSeo';

const metadataByPath = Object.fromEntries(
  TEMPLATE_PAGE_DEFINITIONS.map((page) => [page.path, buildTemplatePageMetadata(page)]),
);

/**
 * @param {string} path Percorso con slash iniziale, es. `/blog`
 */
export function getTemplatePageMetadata(path) {
  const metadata = metadataByPath[path];

  if (!metadata) {
    throw new Error(`Metadata template mancante per ${path}`);
  }

  return metadata;
}

/**
 * Layout condiviso per route template (noindex).
 */
export function TemplatePageLayout({ children }) {
  return children;
}
