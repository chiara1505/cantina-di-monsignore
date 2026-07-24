export function startOfDay(date) {
  const next = new Date(date)
  next.setHours(0, 0, 0, 0)
  return next
}

export function parseTimeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

export function formatMinutesAsTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

const BOOKING_PERIODS = {
  lunch: { open: '12:30', close: '14:30' },
  dinner: { open: '18:30', close: '22:30' },
}

const BOOKING_SCHEDULE = {
  0: ['dinner'],
  1: ['dinner'],
  2: [],
  3: ['dinner'],
  4: ['lunch', 'dinner'],
  5: ['lunch', 'dinner'],
  6: ['lunch', 'dinner'],
}

const SLOT_INTERVAL_MINUTES = 30
const LAST_SLOT_BUFFER_MINUTES = 60

export function isDisabledBookingDate(date, today = startOfDay(new Date())) {
  const day = startOfDay(date)
  return day < today || day.getDay() === 2
}

function generatePeriodSlots(periodKey) {
  const period = BOOKING_PERIODS[periodKey]
  if (!period) return []

  const start = parseTimeToMinutes(period.open)
  const lastSlot = parseTimeToMinutes(period.close) - LAST_SLOT_BUFFER_MINUTES
  const slots = []

  for (let minutes = start; minutes <= lastSlot; minutes += SLOT_INTERVAL_MINUTES) {
    slots.push(formatMinutesAsTime(minutes))
  }

  return slots
}

export function getAvailableTimeSlots(selectedDate, now = new Date()) {
  if (!selectedDate) return []

  const periods = BOOKING_SCHEDULE[selectedDate.getDay()] || []
  const slots = periods.flatMap((periodKey) => generatePeriodSlots(periodKey))

  if (startOfDay(selectedDate).getTime() !== startOfDay(now).getTime()) {
    return slots
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  return slots.filter((slot) => parseTimeToMinutes(slot) > currentMinutes)
}
