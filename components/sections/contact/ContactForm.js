'use client'

import { useState } from 'react'
import LegalFormConsent from '@/components/elements/LegalFormConsent'

const INITIAL_STATUS = { type: 'idle', message: '' }

export default function ContactForm() {
  const [status, setStatus] = useState(INITIAL_STATUS)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus(INITIAL_STATUS)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      contactPrivacyConsent: formData.get('contactPrivacyConsent') === 'yes' ? 'yes' : '',
      company: formData.get('company'),
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result.ok) {
        setStatus({
          type: 'error',
          message: result.error || 'Invio non riuscito. Riprova tra qualche minuto.',
        })
        return
      }

      form.reset()
      setStatus({
        type: 'success',
        message: result.message,
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Invio non riuscito. Controlla la connessione e riprova.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input type="text" name="name" placeholder="Nome e Cognome" required />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <input type="text" name="phone" placeholder="Telefono" required />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea name="message" placeholder="Messaggio" required />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group form-group--legal-consent">
          <LegalFormConsent id="contact-legal-consent" name="contactPrivacyConsent" />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group booking-form-honeypot" aria-hidden="true">
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </div>
        {status.message ? (
          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
            <p
              className={`booking-form-status booking-form-status--${status.type}`}
              role={status.type === 'error' ? 'alert' : 'status'}
            >
              {status.message}
            </p>
          </div>
        ) : null}
        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn mr-0">
          <button className="theme-btn-one" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Invio in corso…' : 'Invia Richiesta'}
          </button>
        </div>
      </div>
    </form>
  )
}
