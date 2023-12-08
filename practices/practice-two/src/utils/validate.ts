export const compareDate = (
  targetDate: Date,
  inputDate: Date,
  message?: string,
) => {
  const currentDate = targetDate
  currentDate.setHours(0, 0, 0, 0)

  const yesterday = new Date(currentDate)
  yesterday.setDate(currentDate.getDate() - 1)

  const inputDateTime = new Date(inputDate)
  inputDateTime.setHours(0, 0, 0, 0)

  const isValidTime = inputDateTime > yesterday

  return isValidTime ? '' : message ?? 'Please provide a valid date'
}
