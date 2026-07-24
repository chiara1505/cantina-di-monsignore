'use client'

import { useState } from 'react'
import BookingDateField from '@/components/elements/BookingDateField'
import BookingTimeField from '@/components/elements/BookingTimeField'

export default function BookingReservationForm() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')

  function handleDateChange(date) {
    setSelectedDate(date)
    setSelectedTime('')
  }

  function handleTimeChange(time) {
    setSelectedTime(time)
  }

  return (
    <form action="/" method="post">
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input type="text" name="name" placeholder="Nome e cognome" required="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input type="email" name="email" placeholder="Indirizzo email" required="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <input type="text" name="phone" placeholder="Numero di telefono" required="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
          <div className="select-box">
            <select className="wide" name="guests" required="">
              <option value="" data-display="Numero di persone">Numero di persone</option>
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
            <select className="wide" name="highchair">
              <option value="" data-display="Seggioloni per bambini">Seggioloni per bambini</option>
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
          <textarea name="notes" placeholder="Note per segnalare eventuali informazioni"></textarea>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
          <button type="submit" className="theme-btn-one">Invia richiesta</button>
        </div>
      </div>
    </form>
  )
}
