'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import {
  buildShopEmailHref,
  buildShopOrderRecap,
  buildShopWhatsAppHref,
} from '@/lib/shopOrder';

export default function ShopOrderRecapModal({ isOpen, onClose, product, quantity }) {
  const recap = buildShopOrderRecap(product, quantity);
  const whatsappHref = buildShopWhatsAppHref(product, quantity);
  const emailHref = buildShopEmailHref(product, quantity);

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

  if (!isOpen) return null;

  return (
    <div className="shop-order-modal" role="dialog" aria-modal="true" aria-labelledby="shop-order-modal-title">
      <button type="button" className="shop-order-modal__backdrop" onClick={onClose} aria-label="Chiudi riepilogo ordine" />
      <div className="shop-order-modal__panel">
        <button type="button" className="shop-order-modal__close" onClick={onClose} aria-label="Chiudi">
          <span aria-hidden="true">&times;</span>
        </button>

        <h3 id="shop-order-modal-title" className="shop-order-modal__title">
          Riepilogo ordine
        </h3>

        <div className="shop-order-modal__product">
          <figure className="shop-order-modal__image">
            <img src={product.image} alt={product.imageAlt ?? product.name} />
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
          Scegli come inviarci l&apos;ordine: completeremo insieme disponibilità, consegna o ritiro.
        </p>

        <div className="shop-order-modal__actions">
          <Link
            href={whatsappHref}
            className="theme-btn-one shop-order-modal__action shop-order-modal__action--whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <span>
              <i className="fab fa-whatsapp" aria-hidden="true" /> Ordina su WhatsApp
            </span>
          </Link>
          <a
            href={emailHref}
            className="theme-btn-one shop-order-modal__action shop-order-modal__action--email"
            onClick={onClose}
          >
            <span>
              <i className="far fa-envelope" aria-hidden="true" /> Ordina per email
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
