'use client'

import { useState } from 'react'
import BookingDateField from '@/components/elements/BookingDateField'
import BookingTimeField from '@/components/elements/BookingTimeField'
import LegalFormConsent from '@/components/elements/LegalFormConsent'

const INITIAL_STATUS = { type: 'idle', message: '' }

export default function BookingReservationForm() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [status, setStatus] = useState(INITIAL_STATUS)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleDateChange(date) {
    setSelectedDate(date)
    setSelectedTime('')
  }

  function handleTimeChange(time) {
    setSelectedTime(time)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus(INITIAL_STATUS)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      guests: formData.get('guests'),
      date: formData.get('date'),
      time: formData.get('time'),
      highchair: formData.get('highchair'),
      notes: formData.get('notes'),
      bookingPrivacyConsent: formData.get('bookingPrivacyConsent') === 'yes' ? 'yes' : '',
      company: formData.get('company'),
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/reservation', {
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
      setSelectedDate(null)
      setSelectedTime('')
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
          <input type="text" name="name" placeholder="Nome e cognome" required />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input type="email" name="email" placeholder="Indirizzo email" required />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input type="text" name="phone" placeholder="Numero di telefono" required />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <div className="select-box">
            <select className="wide" name="guests" required defaultValue="">
              <option value="" data-display="Numero di persone">
                Numero di persone
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <div className="select-box">
            <select className="wide" name="highchair" defaultValue="">
              <option value="" data-display="Seggioloni per bambini">
                Seggioloni per bambini
              </option>
              <option value="si">Sì</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <BookingDateField
            name="date"
            placeholder="Data"
            required
            onChange={handleDateChange}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <BookingTimeField
            selectedDate={selectedDate}
            value={selectedTime}
            onChange={handleTimeChange}
            placeholder="Orario scelto"
            required
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea name="notes" placeholder="Note per segnalare eventuali informazioni" />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group form-group--legal-consent">
          <LegalFormConsent id="booking-legal-consent" name="bookingPrivacyConsent" />
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
        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
          <button type="submit" className="theme-btn-one" disabled={isSubmitting}>
            {isSubmitting ? 'Invio in corso…' : 'Invia richiesta'}
          </button>
        </div>
      </div>
    </form>
  )
}
