const formatData: Record<string, Project[]> = { all: data }

Object.values(ProjectStatus).forEach((value) => {
  const filterByStatus = data.filter((item) => item.status === value)
  formatData[value] = filterByStatus
})
