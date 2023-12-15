/**
 * Convert the integer value representing the timestamp to the string of date
 * @param dateTime An integer value representing the timestamp
 * @param locales A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags
 * If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale.
 * If you omit this parameter, the default locale of the JavaScript runtime is used.
 * @param options An object that contains one or more properties that specify comparison options.
 * @returns The string of date after format
 */
export const formatTime = (
  dateTime: number | string,
  locales: Intl.LocalesArgument = 'en-US',
  options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  },
) => {
  const currentDate: Date = new Date(dateTime)

  const formattedDateWithCommas: string = currentDate.toLocaleDateString(
    locales,
    options,
  )

  // Remove commas from the formatted date
  const formattedDateWithoutCommas: string = formattedDateWithCommas.replace(
    /,/g,
    '',
  )

  return formattedDateWithoutCommas
}

// Function to format a Date object into a 12-hour time string with AM/PM
const timeFormat12Hour = (date: Date) => {
  // Extract the hour component from the Date object
  let h = date.getHours()

  // Extract the minute component from the Date object
  let m: number | string = date.getMinutes()

  // Determine whether it's AM or PM based on the hour
  const ampm = h >= 12 ? 'PM' : 'AM'

  // Convert the hour to 12-hour format (12 should be displayed as 12, not 0)
  h = h % 12 // Take the remainder when divided by 12
  h = h || 12 // If the result is 0, set it to 12

  // Convert minutes to a string and pad with leading zero if needed
  m = m.toString().padStart(2, '0')

  // Create the formatted time string in HH:mm AM/PM format
  const formattedTimeString = h + ':' + m + ' ' + ampm

  // Return the formatted time string
  return formattedTimeString
}

export const formatLongDateTime = (day: Date) => {
  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const originalDate = new Date(day)
  const date = originalDate.getDate()
  const month = MONTHS[originalDate.getMonth()]
  const year = originalDate.getFullYear()
  const time = timeFormat12Hour(day)

  return `${date} ${month} ${year}, ${time}`
}

export const parseDateString = (dateString: string): Date => {
  const parts = dateString.split(/[\s,]+/)

  const day = parseInt(parts[0], 10)
  const month = parts[1]
  const year = parseInt(parts[2], 10)
  const timeParts = parts[3].split(':')
  const hours = parseInt(timeParts[0], 10)
  const minutes = parseInt(timeParts[1], 10)
  const period = parts[4]

  const monthIndex = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ].indexOf(month)

  const date = new Date(
    year,
    monthIndex,
    day,
    period === 'PM' && hours < 12 ? hours + 12 : hours,
    minutes,
  )

  return date
}
