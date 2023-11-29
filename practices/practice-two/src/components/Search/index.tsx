import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

interface ISearchProps {
  width: string
}

const Search = ({ width }: ISearchProps) => {
  return (
    <Box w={width}>
      <InputGroup>
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
    </Box>
  )
}

export default Search
