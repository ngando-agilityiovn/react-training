import { parseDateString } from './date'

export const sorting = <T>(
  data: T[],
  sortBy: string,
  orderBy: string | undefined,
  isDateValue: boolean = false,
) => {
  if (!isDateValue) {
    // If is not date value
    return data.slice().sort((a, b) => {
      if (orderBy === 'ascending') {
        return a[sortBy as keyof T] > b[sortBy as keyof T] ? 1 : -1
      }

      return a[sortBy as keyof T] < b[sortBy as keyof T] ? 1 : -1
    })
  }

  return data.slice().sort((a, b) => {
    if (orderBy === 'ascending') {
      return parseDateString(a[sortBy as keyof T] as string).getTime() >
        parseDateString(b[sortBy as keyof T] as string).getTime()
        ? 1
        : -1
    }

    return parseDateString(a[sortBy as keyof T] as string).getTime() <
      parseDateString(b[sortBy as keyof T] as string).getTime()
      ? 1
      : -1
  })
}
