export const formatTime = (dateTime: number) => {
  const currentDate: Date = new Date(dateTime)

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }

  const formattedDateWithCommas: string = currentDate.toLocaleDateString(
    'en-US',
    options,
  )

  // Remove commas from the formatted date
  const formattedDateWithoutCommas: string = formattedDateWithCommas.replace(
    /,/g,
    '',
  )

  return formattedDateWithoutCommas
}
