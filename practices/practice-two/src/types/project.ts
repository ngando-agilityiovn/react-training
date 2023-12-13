import { ProjectStatus } from './common'

export interface ProjectParent {
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
}

export interface ProjectSub extends ProjectParent {
  index: number
  onEditItem: (data: ProjectSub) => void
  onDeleteItem: (data: ProjectSub) => void
}

export interface TagGroup {
  id: string
  text: string
}
