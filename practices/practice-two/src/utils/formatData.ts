import { Project, ProjectStatus } from '@/types'

export const formatDataByStatus = (
  data: Project[],
): Record<string, Project[]> => {
  const formattedData: Record<string, Project[]> = { all: data }

  Object.values(ProjectStatus).forEach((value) => {
    const filterByStatus = data.filter((item) => item.status === value)
    formattedData[value as string] = filterByStatus
  })

  return formattedData
}
