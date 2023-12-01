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
  dateTime: number,
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
