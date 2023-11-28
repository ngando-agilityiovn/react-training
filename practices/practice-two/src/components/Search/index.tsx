import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

const Search = () => {
  return (
    <InputGroup w="280px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="dark" />
      </InputLeftElement>
      <Input
        borderWidth="thin"
        type="search"
        placeholder="Search"
        borderRadius="0"
      />
    </InputGroup>
  )
}

export default Search
