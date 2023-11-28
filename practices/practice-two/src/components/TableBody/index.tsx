import { ProjectStatus, TAGS_COLORS, TAGS_VARIANT } from '@/types'
import { Avatar, Img, Tag, Tbody, Td, Tr } from '@chakra-ui/react'
import { Status } from '../Status'

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

const variantStatusMapping = {
  [ProjectStatus.ON_TRACK]: TAGS_VARIANT.TRACK,
  [ProjectStatus.AT_RISK]: TAGS_VARIANT.RISK,
  [ProjectStatus.POTENTIAL_RISK]: TAGS_VARIANT.POTENTIAL,
  [ProjectStatus.ON_HOLD]: TAGS_VARIANT.HOLD,
}

const colorStatusMapping = {
  [ProjectStatus.ON_TRACK]: TAGS_COLORS.SUCCESS,
  [ProjectStatus.AT_RISK]: TAGS_COLORS.ERROR,
  [ProjectStatus.POTENTIAL_RISK]: TAGS_COLORS.WARNING,
  [ProjectStatus.ON_HOLD]: TAGS_COLORS.HOLD,
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
                <Td>
                  <Avatar boxSize="6" icon={<Img src={manager} />} />
                </Td>
                <Td>
                  <Status
                    isDot={true}
                    variant={variantStatusMapping[status]}
                    text={status}
                    background={colorStatusMapping[status]}
                  />
                </Td>
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
