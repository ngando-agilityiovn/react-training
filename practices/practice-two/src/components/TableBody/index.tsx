import { Tbody, Td, Tr } from '@chakra-ui/react'
import { IStatusProps, Status, Timeline } from '..'

export interface TableBody {
  id: string
  numeric: number
  projectName: string
  projectManager: string
  status: IStatusProps
  update: number
  resource: string
  timeline: Timeline
  estimation: string
}

export interface IBodyProps {
  tableBody: TableBody[]
}

export const TableBody = ({ tableBody }: IBodyProps) => {
  return (
    <Tbody>
      {tableBody?.length &&
        tableBody.map(
          ({
            numeric,
            projectName,
            projectManager,
            status,
            update,
            resource,
            timeline,
            estimation,
            id,
          }) => {
            return (
              <Tr key={id}>
                <Td>{numeric}</Td>
                <Td>{projectName}</Td>
                <Td>{projectManager}</Td>
                <Td>
                  <Status
                    text={status.text}
                    variant={status.variant}
                    isDot={status.isDot}
                    background={status.background}
                  />
                </Td>
                <Td>{update}</Td>
                <Td>{resource}</Td>
                <Td>
                  <Timeline onChange={timeline.onChange} />
                </Td>
                <Td>{estimation}</Td>
              </Tr>
            )
          },
        )}
    </Tbody>
  )
}
