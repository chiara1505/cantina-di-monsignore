import Link from 'next/link';
import { LEGAL_LAST_UPDATED } from '@/lib/legal/siteLegal';

function renderParagraphs(paragraphs = []) {
  return paragraphs.map((text) => (
    <p key={text.slice(0, 40)}>{text}</p>
  ));
}

function renderList(items = []) {
  if (!items.length) return null;

  return (
    <ul className="legal-document__list">
      {items.map((item) => (
        <li key={item.slice(0, 48)}>{item}</li>
      ))}
    </ul>
  );
}

function renderSubsections(subsections = []) {
  return subsections.map((subsection) => (
    <div key={subsection.title} className="legal-document__subsection">
      <h3>{subsection.title}</h3>
      {renderParagraphs(subsection.paragraphs)}
      {renderList(subsection.list)}
    </div>
  ));
}

export default function LegalDocument({ title, intro, sections, relatedHref, relatedLabel }) {
  return (
    <section className="legal-document sec-pad">
      <div className="auto-container">
        <div className="legal-document__inner">
          <header className="legal-document__header centred mb_40">
            <h1 className="legal-document__title">{title}</h1>
            {intro ? <p className="legal-document__intro">{intro}</p> : null}
            <p className="legal-document__updated">Ultimo aggiornamento: {LEGAL_LAST_UPDATED}</p>
          </header>

          <div className="legal-document__body">
            {sections.map((section) => (
              <article key={section.title} className="legal-document__section">
                <h2>{section.title}</h2>
                {renderParagraphs(section.paragraphs)}
                {renderList(section.list)}
                {renderParagraphs(section.closingParagraphs)}
                {renderSubsections(section.subsections)}
              </article>
            ))}
          </div>

          <footer className="legal-document__footer centred">
            {relatedHref && relatedLabel ? (
              <p>
                Consulta anche la{' '}
                <Link href={relatedHref}>{relatedLabel}</Link>.
              </p>
            ) : null}
          </footer>
        </div>
      </div>
    </section>
  );
}
