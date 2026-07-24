'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { isDisabledBookingDate, startOfDay } from '@/lib/bookingSchedule'

const WEEKDAYS = ['Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa', 'Do']
const MONTHS = [
  'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
]

function formatDisplay(date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

function formatValue(date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export default function BookingDateField({
  name = 'date',
  placeholder = 'Data',
  required = true,
  onChange,
}) {
  const wrapperRef = useRef(null)
  const today = useMemo(() => startOfDay(new Date()), [])
  const [open, setOpen] = useState(false)
  const [viewDate, setViewDate] = useState(() => startOfDay(new Date()))
  const [selectedDate, setSelectedDate] = useState(null)

  const viewYear = viewDate.getFullYear()
  const viewMonth = viewDate.getMonth()

  const calendarDays = useMemo(() => {
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
    const firstWeekday = new Date(viewYear, viewMonth, 1).getDay()
    const leadingEmpty = firstWeekday === 0 ? 6 : firstWeekday - 1
    const cells = []

    for (let i = 0; i < leadingEmpty; i += 1) {
      cells.push(null)
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      cells.push(new Date(viewYear, viewMonth, day))
    }

    return cells
  }, [viewMonth, viewYear])

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function handlePrevMonth() {
    setViewDate(new Date(viewYear, viewMonth - 1, 1))
  }

  function handleNextMonth() {
    setViewDate(new Date(viewYear, viewMonth + 1, 1))
  }

  function handleSelectDate(date) {
    if (isDisabledBookingDate(date, today)) return
    const nextDate = startOfDay(date)
    setSelectedDate(nextDate)
    onChange?.(nextDate)
    setOpen(false)
  }

  return (
    <div className="booking-date-field" ref={wrapperRef}>
      <div className="icon"><i className="icon-13"></i></div>
      <button
        type="button"
        className={`booking-date-field__trigger${selectedDate ? ' has-value' : ''}`}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        {selectedDate ? formatDisplay(selectedDate) : placeholder}
      </button>
      <input
        type="hidden"
        name={name}
        value={selectedDate ? formatValue(selectedDate) : ''}
        required={required}
      />
      {open && (
        <div className="booking-date-field__calendar" role="dialog" aria-label="Seleziona una data">
          <div className="booking-date-field__header">
            <button type="button" className="booking-date-field__nav" onClick={handlePrevMonth} aria-label="Mese precedente">
              <i className="fas fa-angle-left" aria-hidden="true"></i>
            </button>
            <span className="booking-date-field__month">{MONTHS[viewMonth]} {viewYear}</span>
            <button type="button" className="booking-date-field__nav" onClick={handleNextMonth} aria-label="Mese successivo">
              <i className="fas fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
          <div className="booking-date-field__weekdays">
            {WEEKDAYS.map((label) => (
              <span key={label} className="booking-date-field__weekday">{label}</span>
            ))}
          </div>
          <div className="booking-date-field__days">
            {calendarDays.map((date, index) => {
              if (!date) {
                return <span key={`empty-${index}`} className="booking-date-field__day is-empty" aria-hidden="true" />
              }

              const disabled = isDisabledBookingDate(date, today)
              const selected = selectedDate && isSameDay(date, selectedDate)
              const isToday = isSameDay(date, today)

              return (
                <button
                  key={formatValue(date)}
                  type="button"
                  className={[
                    'booking-date-field__day',
                    disabled ? 'is-disabled' : '',
                    selected ? 'is-selected' : '',
                    isToday ? 'is-today' : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => handleSelectDate(date)}
                  disabled={disabled}
                  aria-label={formatDisplay(date)}
                >
                  {date.getDate()}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
