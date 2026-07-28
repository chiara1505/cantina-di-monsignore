'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  WINES_MENU_TABS,
  WINES_PDF_URL,
  getWinesByCategory,
} from '@/lib/menuWinesData';
import { PAGE_SECTION_BACKGROUNDS } from '@/lib/pageTitleImages';

function WineItem({ wine }) {
  return (
    <article className="dishes-menu-item">
      <div className="dishes-menu-item__header">
        <h3 className="dishes-menu-item__name">{wine.name}</h3>
        <span className="dishes-menu-item__price">{wine.price}</span>
      </div>
      {wine.producer ? (
        <p className="dishes-menu-item__description dishes-menu-item__producer">{wine.producer}</p>
      ) : null}
      {wine.description ? (
        <p className="dishes-menu-item__description">{wine.description}</p>
      ) : null}
      {wine.servingTemp ? (
        <p className="dishes-menu-item__note">Temperatura di servizio: {wine.servingTemp}</p>
      ) : null}
    </article>
  );
}

function WineList({ wines }) {
  if (!wines.length) {
    return <p className="dishes-menu-empty">Nessuna etichetta in questa sezione.</p>;
  }

  return (
    <div className="dishes-menu-list">
      {wines.map((wine) => (
        <WineItem key={wine.id} wine={wine} />
      ))}
    </div>
  );
}

export default function WinesMenuPage() {
  const [activeTab, setActiveTab] = useState('bollicine');

  const syncTabFromHash = useCallback(() => {
    const hash = window.location.hash.replace('#', '');
    if (WINES_MENU_TABS.some((tab) => tab.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  useEffect(() => {
    syncTabFromHash();
    window.addEventListener('hashchange', syncTabFromHash);
    return () => window.removeEventListener('hashchange', syncTabFromHash);
  }, [syncTabFromHash]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, '', `#${tabId}`);
  };

  return (
    <section className="dishes-menu-page">
      <div
        className="bg-layer parallax-bg"
        style={{ backgroundImage: `url(${PAGE_SECTION_BACKGROUNDS.menuWines})` }}
      />
      <div className="auto-container dishes-menu-page__content">
        <div className="dishes-menu-page__intro">
          <p>
            Selezioniamo le migliori etichette del territorio etneo e siciliano, affiancandole a
            proposte nazionali e internazionali scelte con cura.
          </p>
          <p>
            Questo è un estratto della nostra Carta dei Vini: esplora la nostra cantina per tipologia
            e{' '}
            <a
              href={WINES_PDF_URL}
              className="dishes-menu-page__intro-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scarica la carta completa in PDF
            </a>
            .
          </p>
        </div>

        <div className="dishes-menu-tabs" role="tablist" aria-label="Tipologie di vino">
          {WINES_MENU_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`dishes-menu-tabs__btn${activeTab === tab.id ? ' is-active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="dishes-menu-panel">
          <WineList wines={getWinesByCategory(activeTab)} />
        </div>

        <div className="dishes-menu-page__cta">
          <a
            href={WINES_PDF_URL}
            className="dishes-menu-page__pdf-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scarica la Carta dei Vini completa
            <i className="fas fa-download" aria-hidden="true" />
          </a>

          <div className="dishes-menu-page__actions">
            <Link href="/menu" className="dishes-menu-page__btn-secondary">
              Scopri i Piatti
            </Link>
            <Link href="/reservation" className="theme-btn-one">
              Riserva un tavolo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
