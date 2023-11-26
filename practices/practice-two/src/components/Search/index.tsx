import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

export const Search = () => {
  return (
    <InputGroup w="280px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="dark" />
      </InputLeftElement>
      <Input type="search" placeholder="Search" borderRadius="0" />
    </InputGroup>
  )
}
