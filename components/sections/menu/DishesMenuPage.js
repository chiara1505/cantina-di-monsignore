'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  DISHES_MENU_TABS,
  getDishesByCategory,
  getSecondiTabSections,
  menuServiceCharges,
} from '@/lib/menuDishesData';
import { PAGE_SECTION_BACKGROUNDS } from '@/lib/pageTitleImages';
import MenuDecorativePanel from '@/components/sections/menu/MenuDecorativePanel';

function DishItem({ dish }) {
  return (
    <article className="dishes-menu-item">
      <div className="dishes-menu-item__header">
        <h3 className="dishes-menu-item__name">{dish.name}</h3>
        <span className="dishes-menu-item__price">{dish.price}</span>
      </div>
      {dish.description ? (
        <p className="dishes-menu-item__description">{dish.description}</p>
      ) : null}
      {dish.allergens ? (
        <p className="dishes-menu-item__allergens">*{dish.allergens}</p>
      ) : null}
      {dish.frozen ? (
        <p className="dishes-menu-item__note">
          ** Prodotto acquistato fresco e successivamente sottoposto a procedura di abbattimento.
        </p>
      ) : null}
      {dish.mediumCooking ? (
        <p className="dishes-menu-item__note">
          # Per le suddette preparazioni è prevista cottura media.
        </p>
      ) : null}
    </article>
  );
}

function DishList({ dishes }) {
  if (!dishes.length) {
    return <p className="dishes-menu-empty">Nessun piatto in questa sezione.</p>;
  }

  return (
    <div className="dishes-menu-list">
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

function SecondiPanel() {
  const sections = getSecondiTabSections();

  return (
    <div className="dishes-menu-sections">
      {sections.map((section) => (
        <div key={section.category} className="dishes-menu-section">
          {section.title ? (
            <h3 className="dishes-menu-section__title">{section.title}</h3>
          ) : null}
          <DishList dishes={getDishesByCategory(section.category)} />
        </div>
      ))}
      <p className="dishes-menu-panel__note">Consultare le Proposte del Giorno.</p>
    </div>
  );
}

export default function DishesMenuPage() {
  const [activeTab, setActiveTab] = useState('antipasti');

  const syncTabFromHash = useCallback(() => {
    const hash = window.location.hash.replace('#', '');
    if (DISHES_MENU_TABS.some((tab) => tab.id === hash)) {
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

  const activeTabLabel =
    DISHES_MENU_TABS.find((tab) => tab.id === activeTab)?.label ?? '';

  return (
    <section className="dishes-menu-page">
      <div
        className="bg-layer parallax-bg"
        style={{ backgroundImage: `url(${PAGE_SECTION_BACKGROUNDS.menuDishes})` }}
      />

      <div className="dishes-menu-page__intro-band">
        <div className="auto-container">
          <div className="dishes-menu-page__intro">
            <div className="sec-title centred dishes-menu-page__title">
              <span className="sub-title">Le nostre proposte</span>
              <h2>Menù alla Carta</h2>
            </div>
            <p>
              Piatti preparati con prodotti del territorio e ricette della tradizione siciliana,
              reinterpretate con equilibrio e rispetto della materia prima.
            </p>
            <p>Scegli la portata per consultare le nostre proposte.</p>
          </div>

          <div className="dishes-menu-tabs" role="tablist" aria-label="Portate del menù">
            {DISHES_MENU_TABS.map((tab) => (
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
        </div>
      </div>

      <div className="auto-container dishes-menu-page__content">
        <MenuDecorativePanel title={activeTabLabel}>
          {activeTab === 'secondi' ? (
            <SecondiPanel />
          ) : (
            <DishList dishes={getDishesByCategory(activeTab)} />
          )}

          {activeTab !== 'bevande' ? (
            <p className="dishes-menu-panel__footnote">
              Gli allergeni sono indicati con numeri secondo la normativa vigente. Per informazioni
              aggiuntive chiedere al personale di sala.
            </p>
          ) : null}
        </MenuDecorativePanel>

        <div className="dishes-menu-page__footer">
          <div className="dishes-menu-service-charges">
            {menuServiceCharges.map((item) => (
              <div key={item.id} className="dishes-menu-service-charges__item">
                <span className="dishes-menu-service-charges__name">{item.name}</span>
                <span className="dishes-menu-service-charges__price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dishes-menu-page__actions">
          <Link href="/menu/vini" className="dishes-menu-page__btn-secondary">
            Scopri i Vini
          </Link>
          <Link href="/reservation" className="theme-btn-one">
            Riserva un tavolo
          </Link>
        </div>
      </div>
    </section>
  );
}
