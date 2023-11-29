import { ProjectStatus } from './common'

export interface Project {
  id: string
  name: string
  manager: string
  status: ProjectStatus
  updatedAt: number
  resource: number
  timeline: {
    start: number
    end: number
  }
  estimation: number
}
