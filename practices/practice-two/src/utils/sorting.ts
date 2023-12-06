import { parseDateString } from './date'

export const sorting = <T>(
  data: T[],
  sortBy: string,
  orderBy: string | undefined,
  isDateValue: boolean = false,
) => {
  const dataSorting = [...data]

  if (orderBy === 'ascending') {
    if (!isDateValue) {
      // If is not date value
      return dataSorting
        .slice()
        .sort((a, b) => (a[sortBy as keyof T] > b[sortBy as keyof T] ? 1 : -1))
    }

    return dataSorting
      .slice()
      .sort((a, b) =>
        parseDateString(a[sortBy as keyof T] as string).getTime() >
        parseDateString(b[sortBy as keyof T] as string).getTime()
          ? 1
          : -1,
      )
  } else if (orderBy === 'descending') {
    if (!isDateValue) {
      // If is not date value
      return dataSorting
        .slice()
        .sort((a, b) => (a[sortBy as keyof T] < b[sortBy as keyof T] ? 1 : -1))
    }

    return dataSorting
      .slice()
      .sort((a, b) =>
        parseDateString(a[sortBy as keyof T] as string).getTime() <
        parseDateString(b[sortBy as keyof T] as string).getTime()
          ? 1
          : -1,
      )
  }

  return dataSorting
}
