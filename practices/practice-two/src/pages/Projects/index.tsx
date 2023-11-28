import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Flex } from '@chakra-ui/react'

// Components
import { Dropdown, Filter, MenuSelect, Search, StatusGroup } from '@/components'

const sortOptions = [
  {
    value: 'name',
    text: 'Project name',
  },
  {
    value: 'updatedAt',
    text: 'Last update',
  },
]

const ProjectsPages = () => {
  return (
    <Box>
      <Flex mt="20px" mb="28px" mx="20px" justifyContent="space-between">
        <Flex w="370px" border="2px solid #e2e8f0" borderRadius="6px">
          <MenuSelect
            leftIcon={<Filter />}
            rightIcon={<Dropdown />}
            title="All"
            options={sortOptions}
          />
          <Search />
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
