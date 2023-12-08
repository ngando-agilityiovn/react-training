import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

interface ISearchProps {
  width: string
  onChange: (value: string) => void
}

const Search = ({ width, onChange }: ISearchProps) => {
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
          onChange={(e) => onChange(e.target.value)}
        />
      </InputGroup>
    </Box>
  )
}

export default Search
