'use client'

import { useMemo } from 'react'
import { getAvailableTimeSlots } from '@/lib/bookingSchedule'

export default function BookingTimeField({
  selectedDate,
  name = 'time',
  placeholder = 'Orario scelto',
  required = true,
  value = '',
  onChange,
}) {
  const slots = useMemo(
    () => getAvailableTimeSlots(selectedDate),
    [selectedDate],
  )

  const isDisabled = !selectedDate || slots.length === 0
  const emptyLabel = selectedDate && slots.length === 0
    ? 'Nessun orario disponibile'
    : placeholder

  return (
    <div className="select-box booking-time-field">
      <select
        className="wide"
        name={name}
        required={required && !isDisabled}
        disabled={isDisabled}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      >
        <option value="" data-display={emptyLabel}>{emptyLabel}</option>
        {slots.map((slot) => (
          <option key={slot} value={slot}>{slot}</option>
        ))}
      </select>
    </div>
  )
}
