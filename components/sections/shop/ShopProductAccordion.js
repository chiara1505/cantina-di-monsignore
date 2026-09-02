'use client';

import { useState } from 'react';

function renderListItem(item, boldLabel) {
  if (!boldLabel) {
    return <li key={item}>{item}</li>;
  }

  const colonIndex = item.indexOf(':');
  if (colonIndex === -1) {
    return <li key={item}>{item}</li>;
  }

  const label = item.slice(0, colonIndex + 1);
  const value = item.slice(colonIndex + 1).trim();

  return (
    <li key={item}>
      <span className="shop-product-accordion__label">{label} </span>
      {value}
    </li>
  );
}

function renderContent(content, sectionId) {
  if (!content) return null;

  if (Array.isArray(content)) {
    const boldLabel = sectionId === 'characteristics';
    const listClassName =
      sectionId === 'pairings'
        ? 'shop-product-accordion__list shop-product-accordion__list--bulleted'
        : 'shop-product-accordion__list';

    return (
      <ul className={listClassName}>
        {content.map((item) => renderListItem(item, boldLabel))}
      </ul>
    );
  }

  return content.split('\n\n').map((paragraph) => (
    <p key={paragraph}>{paragraph}</p>
  ));
}

export default function ShopProductAccordion({ description, characteristics, pairings }) {
  const [openCharacteristics, setOpenCharacteristics] = useState(false);
  const [openPairings, setOpenPairings] = useState(false);

  const sections = [
    {
      id: 'description',
      title: 'Descrizione',
      content: description,
      isOpen: true,
      isStatic: true,
    },
    {
      id: 'characteristics',
      title: 'Caratteristiche',
      content: characteristics,
      isOpen: openCharacteristics,
      isStatic: false,
      onToggle: () => setOpenCharacteristics((current) => !current),
    },
    {
      id: 'pairings',
      title: 'Abbinamenti consigliati',
      content: pairings,
      isOpen: openPairings,
      isStatic: false,
      onToggle: () => setOpenPairings((current) => !current),
    },
  ].filter((section) => section.content);

  if (!sections.length) return null;

  return (
    <div className="shop-product-accordion">
      <ul className="accordion-box">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`accordion block${section.isOpen ? ' active-block' : ''}${section.isStatic ? ' shop-product-accordion__item--static' : ''}`}
          >
            {section.isStatic ? (
              <div className="acc-btn active shop-product-accordion__btn">
                <h5>{section.title}</h5>
              </div>
            ) : (
              <button
                type="button"
                className={`acc-btn shop-product-accordion__btn${section.isOpen ? ' active' : ''}`}
                onClick={section.onToggle}
                aria-expanded={section.isOpen}
              >
                <div className="icon-outer" aria-hidden="true" />
                <h5>{section.title}</h5>
              </button>
            )}
            <div className={`acc-content${section.isOpen ? ' current' : ''}`}>
              <div className="text">{renderContent(section.content, section.id)}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
