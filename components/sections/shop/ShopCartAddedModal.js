'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import ShopCartItemImage from '@/components/sections/shop/ShopCartItemImage';
import { buildShopOrderRecap } from '@/lib/shopOrder';

export default function ShopCartAddedModal({ isOpen, onClose, product, quantity }) {
  const recap = buildShopOrderRecap(product, quantity);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="shop-order-modal" role="dialog" aria-modal="true" aria-labelledby="shop-cart-added-modal-title">
      <button type="button" className="shop-order-modal__backdrop" onClick={onClose} aria-label="Chiudi riepilogo" />
      <div className="shop-order-modal__panel">
        <button type="button" className="shop-order-modal__close" onClick={onClose} aria-label="Chiudi">
          <span aria-hidden="true">&times;</span>
        </button>

        <h3 id="shop-cart-added-modal-title" className="shop-order-modal__title">
          Riepilogo ordine
        </h3>

        <div className="shop-order-modal__product">
          <figure className="shop-order-modal__image">
            <ShopCartItemImage item={product} />
          </figure>
          <div className="shop-order-modal__details">
            <p className="shop-order-modal__name">{product.name}</p>
            <ul className="shop-order-modal__meta">
              <li>
                <span>Quantità</span>
                <strong>{recap.quantity}</strong>
              </li>
              <li>
                <span>Prezzo unitario</span>
                <strong>{recap.unitPriceFormatted}</strong>
              </li>
              <li className="shop-order-modal__meta-total">
                <span>Totale indicativo</span>
                <strong>{recap.lineTotalFormatted}</strong>
              </li>
            </ul>
          </div>
        </div>

        <p className="shop-order-modal__note">
          Il prodotto è stato aggiunto al carrello. Puoi continuare lo shopping o andare al carrello per inviare la
          richiesta d&apos;ordine.
        </p>

        <div className="shop-order-modal__actions">
          <Link href="/cart" className="theme-btn-one shop-order-modal__action" onClick={onClose}>
            <span>Vai al Carrello</span>
          </Link>
          <button type="button" className="theme-btn-one shop-order-modal__action shop-order-modal__action--email" onClick={onClose}>
            <span>Continua lo Shopping</span>
          </button>
        </div>
      </div>
    </div>
  );
}
