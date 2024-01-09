import { Flex, ListItem, UnorderedList } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface INavbarItem {
  title: string
  link: string
}

interface INavbar {
  navbarData: INavbarItem[]
}

const Navbar = ({ navbarData }: INavbar) => {
  return (
    <UnorderedList listStyleType="none">
      <Flex>
        {navbarData.map(({ title, link }) => (
          <ListItem key={title} mr="50px" color="secondary" fontWeight="medium">
            <Link to={link}>{title}</Link>
          </ListItem>
        ))}
      </Flex>
    </UnorderedList>
  )
}

export default Navbar
