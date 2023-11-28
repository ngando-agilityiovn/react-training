import { ReactNode } from 'react'
import {
  Container,
  Avatar,
  Box,
  Flex,
  Img,
  Text,
  Badge,
  HStack,
} from '@chakra-ui/react'

// Components
import { Sidebar } from '@/components'
import { ActiveIcon, HelpIcon, NotificationIcon } from '@/components/Icons'

interface DashboardProps {
  title: string
  titleNumeric?: number
  children: ReactNode
}

const avatar =
  'https://firebasestorage.googleapis.com/v0/b/icon-foot.appspot.com/o/avatar.png?alt=media&token=81b6abe0-23b2-4e79-b3e1-77050c86baaf'

const Dashboard = ({ title, titleNumeric, children }: DashboardProps) => {
  return (
    <Container>
      <Sidebar />

      <Box pos="absolute" top="0" left="72px" right="0">
        <Flex
          h="14"
          px="5"
          justifyContent="space-between"
          alignItems="center"
          bg="backgroundHeader"
        >
          <HStack>
            <Text variant="tertiary">{title}</Text>
            {titleNumeric && <Badge variant="primary">{titleNumeric}</Badge>}
          </HStack>
          <Flex>
            <Box pos="relative">
              <NotificationIcon />
              <Box pos="absolute" top="0" right="0">
                <ActiveIcon />
              </Box>
            </Box>
            <Box mx="6">
              <HelpIcon />
            </Box>
            <Avatar boxSize="6" icon={<Img src={avatar} />} />
          </Flex>
        </Flex>

        {/* Content */}
        {children}
      </Box>
    </Container>
  )
}

export default Dashboard
