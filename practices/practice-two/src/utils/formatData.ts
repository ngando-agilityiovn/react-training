import { ProjectStatus, ProjectSub } from '@/types'

export const formatDataByStatus = (
  data: ProjectSub[],
): Record<string, ProjectSub[]> => {
  const formattedData: Record<string, ProjectSub[]> = { all: data }

  Object.values(ProjectStatus).forEach((value) => {
    const filterByStatus = data.filter((item) => item.status === value)
    formattedData[value as string] = filterByStatus
  })

  return formattedData
}
