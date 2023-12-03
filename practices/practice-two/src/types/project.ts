import { ProjectStatus } from './common'

export interface Project {
  id: number
  name: string
  manager: string
  status: ProjectStatus
  updatedAt: number
  resource: string[]
  start: number
  end: number
  estimation: number
  index: number
  onEditItem: (data: Project) => void
}

export interface TagGroup {
  id: string
  text: string
}
