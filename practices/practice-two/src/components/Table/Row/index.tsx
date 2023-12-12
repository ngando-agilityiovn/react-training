import { Avatar, Badge, Flex, Img, Tag, Td, Text } from '@chakra-ui/react'
import { ChevronRightIcon, DragHandleIcon } from '@chakra-ui/icons'

// Types
import { Project, ProjectStatus, TAGS_COLORS, TAGS_VARIANT } from '@/types'

// Utils
import { formatTime } from '@/utils'

// Components
import Status from '../../Status'
import { NoteIcon } from '../../Icons'
import MenuSelect from '../../MenuSelect'

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

const TableRow = (project: Project) => {
  const {
    index,
    name,
    manager,
    status,
    updatedAt,
    resource,
    start,
    end,
    estimation,
    onEditItem,
    onDeleteItem,
  } = project

  const MENU_OPTION = [
    {
      value: 'edit',
      text: 'Edit',
      handleClick: () => onEditItem(project),
    },
    {
      value: 'delete',
      text: 'Delete',
      handleClick: () => onDeleteItem(project),
    },
  ]

  return (
    <>
      <Td>{index + 1}</Td>
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
        <Avatar
          borderRadius="6px"
          boxSize="6"
          icon={<Img src={manager?.img} />}
        />
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
          {resource.length}
        </Badge>
      </Td>
      <Td
        fontSize="xs"
        color="secondary"
        fontWeight="medium"
        lineHeight="extraShort"
        letterSpacing="wider"
      >
        <Tag>{formatTime(start)}</Tag>
        <ChevronRightIcon mx="1.5" />
        <Tag>{formatTime(end)}</Tag>
      </Td>
      <Td
        fontSize="sm"
        color="textTertiary"
        fontWeight="normal"
        lineHeight="5"
        textAlign="center"
      >
        <Flex marginLeft="4" justifyContent="space-between" alignItems="center">
          <Flex>
            <Text mr="1">US$</Text>
            {estimation}
            <Text>k</Text>
          </Flex>
          <MenuSelect leftIcon={<DragHandleIcon />} options={MENU_OPTION} />
        </Flex>
      </Td>
    </>
  )
}

export default TableRow
