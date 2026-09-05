'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { buildShopCartRecap } from '@/lib/shopOrder';

const INITIAL_STATUS = { type: 'idle', message: '' };

export default function ShopCartEmailModal({ isOpen, onClose, orderItems }) {
  const recap = buildShopCartRecap(orderItems);
  const [status, setStatus] = useState(INITIAL_STATUS);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !isSubmitting) {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isSubmitting, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setStatus(INITIAL_STATUS);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen || !orderItems.length) return null;

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus(INITIAL_STATUS);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      notes: formData.get('notes'),
      shopOrderConsent: formData.get('shopOrderConsent') === 'yes' ? 'yes' : '',
      company: formData.get('company'),
      items: orderItems.map(({ product, quantity }) => ({
        slug: product.slug,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image,
        imageAlt: product.imageAlt,
      })),
    };

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/shop-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus({
          type: 'error',
          message: result.error || 'Invio non riuscito. Riprova tra qualche minuto.',
        });
        return;
      }

      form.reset();
      setStatus({
        type: 'success',
        message: result.message,
      });
    } catch {
      setStatus({
        type: 'error',
        message: 'Invio non riuscito. Controlla la connessione e riprova.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="shop-order-modal" role="dialog" aria-modal="true" aria-labelledby="shop-cart-email-modal-title">
      <button
        type="button"
        className="shop-order-modal__backdrop"
        onClick={isSubmitting ? undefined : onClose}
        aria-label="Chiudi"
      />
      <div className="shop-order-modal__panel shop-cart-email-modal__panel">
        <button
          type="button"
          className="shop-order-modal__close"
          onClick={onClose}
          disabled={isSubmitting}
          aria-label="Chiudi"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <h3 id="shop-cart-email-modal-title" className="shop-order-modal__title">
          Ordina per email
        </h3>

        {status.type === 'success' ? (
          <>
            <p className="shop-order-modal__note booking-form-status booking-form-status--success" role="status">
              {status.message}
            </p>
            <div className="shop-order-modal__actions">
              <button type="button" className="theme-btn-one shop-order-modal__action" onClick={onClose}>
                <span>Chiudi</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="shop-order-modal__items">
              {recap.lines.map((line) => (
                <div key={line.product.slug} className="shop-cart-email-modal__item">
                  <p className="shop-cart-email-modal__item-name">
                    {line.quantity}x {line.product.name}
                  </p>
                  <p className="shop-cart-email-modal__item-price">{line.lineTotalFormatted}</p>
                </div>
              ))}
            </div>

            <div className="shop-order-modal__summary">
              <span>Totale indicativo</span>
              <strong>{recap.totalFormatted}</strong>
            </div>

            <p className="shop-order-modal__note">
              Inserisci i tuoi dati: invieremo la richiesta al ristorante e ti risponderemo a questo indirizzo email.
            </p>

            <form className="shop-cart-email-modal__form" onSubmit={handleSubmit} noValidate>
              <div className="shop-cart-email-modal__field">
                <input type="text" name="name" placeholder="Nome e cognome" required disabled={isSubmitting} />
              </div>
              <div className="shop-cart-email-modal__field">
                <input type="email" name="email" placeholder="Indirizzo email" required disabled={isSubmitting} />
              </div>
              <div className="shop-cart-email-modal__field">
                <textarea
                  name="notes"
                  placeholder="Note opzionali (consegna, ritiro, richieste…)"
                  disabled={isSubmitting}
                />
              </div>

              <label className="legal-form-consent shop-cart-email-modal__consent" htmlFor="shop-order-legal-consent">
                <input
                  type="checkbox"
                  id="shop-order-legal-consent"
                  name="shopOrderConsent"
                  value="yes"
                  required
                  disabled={isSubmitting}
                />
                <span className="legal-form-consent__text">
                  Ho letto i{' '}
                  <Link href="/termini-e-condizioni">Termini e condizioni</Link> dello Shop e accetto la{' '}
                  <Link href="/privacy-policy">Privacy Policy</Link>.
                </span>
              </label>

              <div className="shop-cart-email-modal__honeypot" aria-hidden="true">
                <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              {status.message ? (
                <p
                  className={`booking-form-status booking-form-status--${status.type}`}
                  role={status.type === 'error' ? 'alert' : 'status'}
                >
                  {status.message}
                </p>
              ) : null}

              <button
                type="submit"
                className="theme-btn-one shop-order-modal__action shop-cart-page__order-action--email"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Invio in corso…' : 'Invia richiesta ordine'}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
