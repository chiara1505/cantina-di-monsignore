import {
  BOOKING_EDGE_BUFFER_MINUTES,
  DEFAULT_WEEKLY_HOURS,
  SLOT_INTERVAL_MINUTES,
  TIME_HH_MM_PATTERN,
} from './openingHours.js'

export function startOfDay(date) {
  const next = new Date(date)
  next.setHours(0, 0, 0, 0)
  return next
}

export function parseTimeToMinutes(time) {
  const [hours, minutes] = String(time).split(':').map(Number)
  return hours * 60 + minutes
}

export function formatMinutesAsTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

/**
 * @param {Array<{ weekday: string, closed?: boolean, periods?: { open?: string, close?: string }[] }>} weeklyHours
 */
function getDaySchedule(weeklyHours, jsWeekday) {
  const schedule = Array.isArray(weeklyHours) && weeklyHours.length > 0
    ? weeklyHours
    : DEFAULT_WEEKLY_HOURS

  return schedule.find((day) => String(day.weekday) === String(jsWeekday)) || null
}

/**
 * @param {Date} date
 * @param {Array<{ weekday: string, closed?: boolean, periods?: { open?: string, close?: string }[] }>} [weeklyHours]
 * @param {Date} [today]
 */
export function isDisabledBookingDate(
  date,
  weeklyHours = DEFAULT_WEEKLY_HOURS,
  today = startOfDay(new Date()),
) {
  const day = startOfDay(date)
  if (day < today) return true

  const daySchedule = getDaySchedule(weeklyHours, day.getDay())
  if (!daySchedule || daySchedule.closed) return true

  const periods = (daySchedule.periods || []).filter(
    (period) =>
      TIME_HH_MM_PATTERN.test(String(period.open || '')) &&
      TIME_HH_MM_PATTERN.test(String(period.close || '')),
  )

  return periods.length === 0
}

/**
 * @param {{ open: string, close: string }} period
 */
function generatePeriodSlots(period) {
  const start = parseTimeToMinutes(period.open) + BOOKING_EDGE_BUFFER_MINUTES
  const lastSlot = parseTimeToMinutes(period.close) - BOOKING_EDGE_BUFFER_MINUTES
  const slots = []

  if (lastSlot < start) return slots

  for (let minutes = start; minutes <= lastSlot; minutes += SLOT_INTERVAL_MINUTES) {
    slots.push(formatMinutesAsTime(minutes))
  }

  return slots
}

/**
 * @param {Date | null} selectedDate
 * @param {Array<{ weekday: string, closed?: boolean, periods?: { open?: string, close?: string }[] }>} [weeklyHours]
 * @param {Date} [now]
 */
export function getAvailableTimeSlots(
  selectedDate,
  weeklyHours = DEFAULT_WEEKLY_HOURS,
  now = new Date(),
) {
  if (!selectedDate) return []

  const daySchedule = getDaySchedule(weeklyHours, selectedDate.getDay())
  if (!daySchedule || daySchedule.closed) return []

  const periods = (daySchedule.periods || []).filter(
    (period) =>
      TIME_HH_MM_PATTERN.test(String(period?.open || '')) &&
      TIME_HH_MM_PATTERN.test(String(period?.close || '')),
  )

  const slots = periods.flatMap((period) =>
    generatePeriodSlots({
      open: String(period.open),
      close: String(period.close),
    }),
  )

  if (startOfDay(selectedDate).getTime() !== startOfDay(now).getTime()) {
    return slots
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  return slots.filter((slot) => parseTimeToMinutes(slot) > currentMinutes)
}

/**
 * Validazione server-side di data/ora rispetto agli orari CMS.
 * @param {string} dateValue YYYY-MM-DD
 * @param {string} timeValue HH:mm
 * @param {Array<{ weekday: string, closed?: boolean, periods?: { open?: string, close?: string }[] }>} weeklyHours
 */
export function isBookableDateTime(dateValue, timeValue, weeklyHours = DEFAULT_WEEKLY_HOURS) {
  if (!dateValue || !TIME_HH_MM_PATTERN.test(String(timeValue || ''))) {
    return false
  }

  const [year, month, day] = String(dateValue).split('-').map(Number)
  if (!year || !month || !day) return false

  const selectedDate = startOfDay(new Date(year, month - 1, day))
  if (Number.isNaN(selectedDate.getTime())) return false

  if (isDisabledBookingDate(selectedDate, weeklyHours)) return false

  const slots = getAvailableTimeSlots(selectedDate, weeklyHours)
  return slots.includes(String(timeValue))
}
