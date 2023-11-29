import { Project, ProjectStatus } from '@/types'

export const projects: Project[] = [
  {
    id: '0',
    name: 'HTML-CSS project',
    manager:
      'https://firebasestorage.googleapis.com/v0/b/icon-foot.appspot.com/o/avatarDias.png?alt=media&token=06db0e21-b5a5-4574-9bf4-678ea2aa279d',
    status: ProjectStatus.AT_RISK,
    updatedAt: 123456,
    resource: 4,
    timeline: {
      start: 123456,
      end: 123456,
    },
    estimation: 4,
  },
  {
    id: '1',
    name: 'JS project',
    manager:
      'https://firebasestorage.googleapis.com/v0/b/icon-foot.appspot.com/o/avatarRog.png?alt=media&token=606acbd1-cf3a-4c59-85ca-f7d49b74347a',
    status: ProjectStatus.ON_HOLD,
    updatedAt: 123456,
    resource: 4,
    timeline: {
      start: 123456,
      end: 123456,
    },
    estimation: 4,
  },
  {
    id: '2',
    name: 'Python project',
    manager:
      'https://firebasestorage.googleapis.com/v0/b/icon-foot.appspot.com/o/avatar.png?alt=media&token=81b6abe0-23b2-4e79-b3e1-77050c86baaf',
    status: ProjectStatus.POTENTIAL_RISK,
    updatedAt: 123456,
    resource: 4,
    timeline: {
      start: 123456,
      end: 123456,
    },
    estimation: 4,
  },
  {
    id: '3',
    name: 'Python project',
    manager:
      'https://firebasestorage.googleapis.com/v0/b/icon-foot.appspot.com/o/avatar.png?alt=media&token=81b6abe0-23b2-4e79-b3e1-77050c86baaf',
    status: ProjectStatus.ON_TRACK,
    updatedAt: 123456,
    resource: 4,
    timeline: {
      start: 123456,
      end: 123456,
    },
    estimation: 4,
  },
]
