import { ProjectStatus } from './common'

export interface Project {
  id: number
  name: string
  manager: string
  status: ProjectStatus
  updatedAt: number
  resource: number
  start: number
  end: number
  estimation: number
}
