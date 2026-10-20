/** Orari settimanali strutturati: footer/contatti + modulo prenotazioni. */

export const WEEKDAY_OPTIONS = [
  { label: 'Lunedì', value: '1' },
  { label: 'Martedì', value: '2' },
  { label: 'Mercoledì', value: '3' },
  { label: 'Giovedì', value: '4' },
  { label: 'Venerdì', value: '5' },
  { label: 'Sabato', value: '6' },
  { label: 'Domenica', value: '0' },
]

/** Ordine di visualizzazione: Lun → Dom */
const WEEKDAY_SORT_ORDER = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  0: 6,
}

function getWeekdaySortIndex(weekday) {
  const key = Number(weekday)
  return WEEKDAY_SORT_ORDER[key] ?? 99
}

const WEEKDAY_LABEL_BY_VALUE = Object.fromEntries(
  WEEKDAY_OPTIONS.map((option) => [option.value, option.label]),
)

const SCHEMA_DAY_BY_WEEKDAY = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

export const SLOT_INTERVAL_MINUTES = 30
/** Offset da apertura/chiusura: primo slot = apertura + 30′, ultimo = chiusura − 30′. */
export const BOOKING_EDGE_BUFFER_MINUTES = 30

export const TIME_HH_MM_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/

/** Schedule predefinita allineata al comportamento attuale del form. */
export const DEFAULT_WEEKLY_HOURS = [
  { weekday: '1', closed: false, periods: [{ open: '18:30', close: '22:30' }] },
  { weekday: '2', closed: true, periods: [] },
  { weekday: '3', closed: false, periods: [{ open: '18:30', close: '22:30' }] },
  {
    weekday: '4',
    closed: false,
    periods: [
      { open: '12:30', close: '14:30' },
      { open: '18:30', close: '22:30' },
    ],
  },
  {
    weekday: '5',
    closed: false,
    periods: [
      { open: '12:30', close: '14:30' },
      { open: '18:30', close: '22:30' },
    ],
  },
  {
    weekday: '6',
    closed: false,
    periods: [
      { open: '12:30', close: '14:30' },
      { open: '18:30', close: '22:30' },
    ],
  },
  { weekday: '0', closed: false, periods: [{ open: '12:30', close: '15:00' }] },
]

export function getWeekdayLabel(weekday) {
  return WEEKDAY_LABEL_BY_VALUE[String(weekday)] || ''
}

export function sortWeeklyHours(weeklyHours = []) {
  return [...weeklyHours].sort(
    (a, b) => getWeekdaySortIndex(a.weekday) - getWeekdaySortIndex(b.weekday),
  )
}

/**
 * @param {{ open?: string, close?: string }[]} periods
 */
export function formatPeriodsLabel(periods = []) {
  return periods
    .map((period) => {
      const open = String(period?.open || '').trim()
      const close = String(period?.close || '').trim()
      if (!open || !close) return ''
      return `${open} - ${close}`
    })
    .filter(Boolean)
    .join(' / ')
}

/**
 * @param {{ weekday: string, closed?: boolean, periods?: { open?: string, close?: string }[] }} day
 */
export function formatOpeningHourLine(day) {
  const label = getWeekdayLabel(day.weekday)
  if (!label) return ''

  if (day.closed) {
    return `${label}: Chiuso`
  }

  const periodsLabel = formatPeriodsLabel(day.periods)
  return periodsLabel ? `${label} ${periodsLabel}` : ''
}

/**
 * Righe footer: giorni aperti + giorni chiusi in coda (come prima).
 * @param {Array<{ weekday: string, closed?: boolean, periods?: { open?: string, close?: string }[] }>} weeklyHours
 */
export function buildFooterOpeningHourLines(weeklyHours = []) {
  const sorted = sortWeeklyHours(weeklyHours)
  const openLines = sorted
    .filter((day) => !day.closed)
    .map(formatOpeningHourLine)
    .filter(Boolean)
  const closedLines = sorted
    .filter((day) => day.closed)
    .map(formatOpeningHourLine)
    .filter(Boolean)

  return [...openLines, ...closedLines]
}

/**
 * Solo giorni aperti (pagina Contatti).
 * @param {Array<{ weekday: string, closed?: boolean, periods?: { open?: string, close?: string }[] }>} weeklyHours
 */
export function buildContactOpeningHourLines(weeklyHours = []) {
  return sortWeeklyHours(weeklyHours)
    .filter((day) => !day.closed)
    .map(formatOpeningHourLine)
    .filter(Boolean)
}

/**
 * @param {Array<{ weekday: string, closed?: boolean }>} weeklyHours
 */
export function getClosedDayLabels(weeklyHours = []) {
  return sortWeeklyHours(weeklyHours)
    .filter((day) => day.closed)
    .map((day) => getWeekdayLabel(day.weekday))
    .filter(Boolean)
}

/**
 * @param {string[]} closedDayLabels
 */
export function buildClosedDaySummary(closedDayLabels = []) {
  if (closedDayLabels.length === 0) return ''
  if (closedDayLabels.length === 1) return closedDayLabels[0]
  if (closedDayLabels.length === 2) {
    return `${closedDayLabels[0]} e ${closedDayLabels[1]}`
  }
  return `${closedDayLabels.slice(0, -1).join(', ')} e ${closedDayLabels.at(-1)}`
}

/**
 * @param {Array<{ weekday: string, closed?: boolean, periods?: { open?: string, close?: string }[] }>} weeklyHours
 */
export function buildSchemaOpeningHours(weeklyHours = []) {
  const specs = []

  for (const day of weeklyHours) {
    if (day.closed) continue
    const schemaDay = SCHEMA_DAY_BY_WEEKDAY[String(day.weekday)]
    if (!schemaDay) continue

    for (const period of day.periods || []) {
      const opens = String(period?.open || '').trim()
      const closes = String(period?.close || '').trim()
      if (!TIME_HH_MM_PATTERN.test(opens) || !TIME_HH_MM_PATTERN.test(closes)) continue

      specs.push({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${schemaDay}`,
        opens,
        closes,
      })
    }
  }

  return specs
}

/**
 * @param {unknown} periods
 */
export function normalizePeriods(periods) {
  if (!Array.isArray(periods)) return []

  return periods
    .map((period) => ({
      open: String(period?.open ?? '').trim(),
      close: String(period?.close ?? '').trim(),
    }))
    .filter(
      (period) =>
        TIME_HH_MM_PATTERN.test(period.open) && TIME_HH_MM_PATTERN.test(period.close),
    )
}

/**
 * @param {unknown} weeklyHours
 */
export function normalizeWeeklyHours(weeklyHours) {
  if (!Array.isArray(weeklyHours) || weeklyHours.length === 0) {
    return DEFAULT_WEEKLY_HOURS.map((day) => ({
      weekday: day.weekday,
      closed: day.closed,
      periods: day.periods.map((period) => ({ ...period })),
    }))
  }

  const byWeekday = new Map()

  for (const entry of weeklyHours) {
    const weekday = String(entry?.weekday ?? '').trim()
    if (!WEEKDAY_LABEL_BY_VALUE[weekday]) continue

    const closed = Boolean(entry?.closed)
    byWeekday.set(weekday, {
      weekday,
      closed,
      periods: closed ? [] : normalizePeriods(entry?.periods),
    })
  }

  if (byWeekday.size === 0) {
    return normalizeWeeklyHours(null)
  }

  return sortWeeklyHours([...byWeekday.values()])
}
