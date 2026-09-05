'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const INITIAL_STATUS = { type: 'idle', message: '' };

export default function ShopCartEmailForm({ isOpen, orderItems }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState(INITIAL_STATUS);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStatus(INITIAL_STATUS);
      setIsSubmitting(false);
      return;
    }

    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
    <div ref={formRef} className="shop-cart-page__email-form" id="shop-cart-email-form">
      <h4 className="shop-cart-page__email-form-title">Ordina per email</h4>

      {status.type === 'success' ? (
        <p className="booking-form-status booking-form-status--success" role="status">
          {status.message}
        </p>
      ) : (
        <>
          <p className="shop-cart-page__email-form-intro">
            Scrivi qui i tuoi dati per inviarci l&apos;ordine. Ti risponderemo al tuo indirizzo email.
          </p>

          <form className="shop-cart-page__email-form-fields" onSubmit={handleSubmit} noValidate>
            <div className="shop-cart-page__email-field">
              <input type="text" name="name" placeholder="Nome e cognome" required disabled={isSubmitting} />
            </div>
            <div className="shop-cart-page__email-field">
              <input type="email" name="email" placeholder="Indirizzo email" required disabled={isSubmitting} />
            </div>
            <div className="shop-cart-page__email-field">
              <textarea
                name="notes"
                placeholder="Note opzionali (scrivici l'indirizzo di spedizione o se preferisci ritirare da noi)"
                disabled={isSubmitting}
              />
            </div>

            <label className="legal-form-consent shop-cart-page__email-consent" htmlFor="shop-order-legal-consent">
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

            <div className="shop-cart-page__email-honeypot" aria-hidden="true">
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
              className="theme-btn-one shop-cart-page__order-action shop-cart-page__order-action--email"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Invio in corso…' : 'Invia richiesta ordine'}</span>
            </button>
          </form>
        </>
      )}
    </div>
  );
}
