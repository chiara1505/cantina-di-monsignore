'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  buildShopEmailHref,
  buildShopGmailHref,
  buildShopOutlookHref,
  buildShopOrderRecap,
  buildShopWhatsAppHref,
} from '@/lib/shopOrder';

const EMAIL_OPTIONS = [
  {
    id: 'device',
    label: 'App del dispositivo',
    hint: 'Outlook, Mail, Thunderbird…',
    external: false,
  },
  {
    id: 'gmail',
    label: 'Gmail',
    hint: 'Apri nel browser',
    external: true,
  },
  {
    id: 'outlook',
    label: 'Outlook',
    hint: 'Apri nel browser',
    external: true,
  },
];

export default function ShopOrderRecapModal({ isOpen, onClose, product, quantity }) {
  const [showEmailPicker, setShowEmailPicker] = useState(false);
  const recap = buildShopOrderRecap(product, quantity);
  const whatsappHref = buildShopWhatsAppHref(product, quantity);
  const emailHref = buildShopEmailHref(product, quantity);
  const gmailHref = buildShopGmailHref(product, quantity);
  const outlookHref = buildShopOutlookHref(product, quantity);

  const emailHrefs = {
    device: emailHref,
    gmail: gmailHref,
    outlook: outlookHref,
  };

  useEffect(() => {
    if (!isOpen) {
      setShowEmailPicker(false);
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (showEmailPicker) {
          setShowEmailPicker(false);
          return;
        }
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, showEmailPicker]);

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

          {!showEmailPicker ? (
            <button
              type="button"
              className="theme-btn-one shop-order-modal__action shop-order-modal__action--email"
              onClick={() => setShowEmailPicker(true)}
            >
              <span>
                <i className="far fa-envelope" aria-hidden="true" /> Ordina per email
              </span>
            </button>
          ) : (
            <div className="shop-order-modal__email-picker">
              <p className="shop-order-modal__email-picker-title">Scegli la tua app email</p>
              <div className="shop-order-modal__email-options">
                {EMAIL_OPTIONS.map((option) => (
                  <a
                    key={option.id}
                    href={emailHrefs[option.id]}
                    className="shop-order-modal__email-option"
                    {...(option.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    onClick={onClose}
                  >
                    <strong>{option.label}</strong>
                    <span>{option.hint}</span>
                  </a>
                ))}
              </div>
              <button
                type="button"
                className="shop-order-modal__email-picker-back"
                onClick={() => setShowEmailPicker(false)}
              >
                Indietro
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
