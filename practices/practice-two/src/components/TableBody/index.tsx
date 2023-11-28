import { Tag, Tbody, Td, Tr } from '@chakra-ui/react'

export enum ProjectStatus {
  ON_TRACK = 'On Track',
  AT_RISK = 'At Risk',
  POTENTIAL_RISK = 'Potential Risk',
  ON_HOLD = 'On Hold',
}
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

export interface IBodyProps {
  tableBody: Project[]
}

export const TableBody = ({ tableBody }: IBodyProps) => {
  return (
    <Tbody>
      {tableBody?.length &&
        tableBody.map(
          ({
            name,
            manager,
            status,
            updatedAt,
            resource,
            timeline,
            estimation,
            id,
          }) => {
            return (
              <Tr key={id}>
                <Td>{id}</Td>
                <Td
                  fontSize="sm"
                  color="primary"
                  fontWeight="medium"
                  lineHeight="5"
                  letterSpacing="wider"
                >
                  {name}
                </Td>
                <Td>{manager}</Td>
                <Td>{status}</Td>
                <Td>{updatedAt}</Td>
                <Td>{resource}</Td>
                <Td>
                  <Tag>{timeline.end}</Tag>
                  <Tag variant="ghost">{timeline.start}</Tag>
                </Td>
                <Td>{estimation}</Td>
              </Tr>
            )
          },
        )}
    </Tbody>
  )
}
