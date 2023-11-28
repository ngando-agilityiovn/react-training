import {
  Avatar,
  Badge,
  Flex,
  Img,
  Tag,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import { ChevronRightIcon, DragHandleIcon } from '@chakra-ui/icons'

// Types
import { ProjectStatus, TAGS_COLORS, TAGS_VARIANT } from '@/types'

// Components
import { NoteIcon } from '../Icons'
import MenuSelect from '../MenuSelect'
import Status from '../Status'

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

const options = {
  menuOptions: [
    {
      value: 'edit',
      text: 'Edit',
    },
    {
      value: 'delete',
      text: 'Delete',
    },
  ],
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
                <Td
                  fontSize="sm"
                  color="textTertiary"
                  fontWeight="normal"
                  lineHeight="5"
                  letterSpacing="wider"
                >
                  <Flex gap="1.5">
                    <NoteIcon />
                    {updatedAt}
                  </Flex>
                </Td>
                <Td
                  fontSize="sm"
                  color="secondary"
                  fontWeight="normal"
                  lineHeight="5"
                  letterSpacing="wider"
                >
                  <Badge marginLeft="5" variant="primary">
                    {resource}
                  </Badge>
                </Td>
                <Td
                  fontSize="xs"
                  color="secondary"
                  fontWeight="medium"
                  lineHeight="extraShort"
                  letterSpacing="wider"
                >
                  <Tag>{timeline.start}</Tag>
                  <ChevronRightIcon mx="1.5" />
                  <Tag>{timeline.end}</Tag>
                </Td>
                <Td
                  fontSize="sm"
                  color="textTertiary"
                  fontWeight="normal"
                  lineHeight="5"
                  textAlign="center"
                >
                  <Flex
                    marginLeft="4"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Flex>
                      <Text mr="1">US$</Text>
                      {estimation}
                      <Text>k</Text>
                    </Flex>
                    <MenuSelect
                      leftIcon={<DragHandleIcon />}
                      options={options.menuOptions}
                    />
                  </Flex>
                </Td>
              </Tr>
            )
          },
        )}
    </Tbody>
  )
}
