import { ProjectStatus } from './common'

export interface Project {
  id: string
  name: string
  manager: {
    id: number
    img: string
  }
  status: ProjectStatus
  updatedAt: number
  resource: string[]
  start: string
  end: string
  estimation: number
  index: number
  onEditItem: (data: Project) => void
}

export interface TagGroup {
  id: string
  text: string
}
