import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'

// Components
import {
  Form,
  MenuSelect,
  ModalCustom,
  Search,
  StatusGroup,
} from '@/components'
import { DropdownIcon, FilterIcon } from '@/components/Icons'

// Constants
import { sortOptions } from '@/constants'

const ProjectsPages = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <Flex mt="20px" mb="28px" mx="20px" justifyContent="space-between">
        <Flex w="370px" border="2px solid #e2e8f0" borderRadius="6px">
          <MenuSelect
            leftIcon={<FilterIcon />}
            rightIcon={<DropdownIcon />}
            title="All"
            options={sortOptions}
          />
          <Search width="17.5rem" />
        </Flex>
        <Button leftIcon={<AddIcon />} variant="solid" onClick={onOpen}>
          Add project
        </Button>
      </Flex>
      <StatusGroup />
      <ModalCustom title="Add project" onClose={onClose} isOpen={isOpen}>
        <Form />
      </ModalCustom>
    </Box>
  )
}

export default ProjectsPages
