import { Flex, ListItem, UnorderedList } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

// Constant
import { NAVBAR } from '@/constants'

const Navbar = () => {
  return (
    <UnorderedList listStyleType="none">
      <Flex>
        {NAVBAR.map(({ title, link }) => (
          <ListItem key={title} mr="50px" color="secondary" fontWeight="medium">
            <Link to={link}>{title}</Link>
          </ListItem>
        ))}
      </Flex>
    </UnorderedList>
  )
}

export default Navbar
