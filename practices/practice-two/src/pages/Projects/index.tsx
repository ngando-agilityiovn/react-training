import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Flex } from '@chakra-ui/react'

// Components
import { MenuSelect, Search, StatusGroup } from '@/components'
import { DropdownIcon, FilterIcon } from '@/components/Icons'

// Constants
import { sortOptions } from '@/constants'

const ProjectsPages = () => {
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
        <Button leftIcon={<AddIcon />} variant="solid">
          Add project
        </Button>
      </Flex>
      <StatusGroup />
    </Box>
  )
}

export default ProjectsPages
