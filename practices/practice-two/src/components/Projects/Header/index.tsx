import { AddIcon } from '@chakra-ui/icons'
import { Button, Flex } from '@chakra-ui/react'

// Components
import { DropdownIcon } from '@/components/Icons'
import { Search, MenuSelect } from '@/components'

interface Option {
  value: string
  text: string
  handleClick: () => void
}

interface IProjectHeaderPRops {
  handleSearch: (keySearch: string) => void
  handleToggleProductModal: () => void
  options: Option[]
}

const ProjectHeader = ({
  handleToggleProductModal,
  handleSearch,
  options,
}: IProjectHeaderPRops) => {
  return (
    <Flex mt="5" mb="7" mx="5" justifyContent="space-between">
      <Flex w="370px" border="2px solid #e2e8f0" borderRadius="1.5">
        <MenuSelect
          rightIcon={<DropdownIcon />}
          title="Sort by"
          options={options}
        />
        <Search width="280px" onChange={handleSearch} />
      </Flex>

      <Button
        leftIcon={<AddIcon />}
        variant="solid"
        onClick={handleToggleProductModal}
      >
        Add project
      </Button>
    </Flex>
  )
}

export default ProjectHeader
