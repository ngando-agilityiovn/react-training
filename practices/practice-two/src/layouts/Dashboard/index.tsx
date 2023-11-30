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

// Constants
import { AVATAR } from '@/constants'

interface DashboardProps {
  title: string
  titleNumeric?: number
  children: ReactNode
}

const Dashboard = ({ title, titleNumeric, children }: DashboardProps) => {
  return (
    <Container>
      <Sidebar />

      <Box pos="absolute" top="0" left="18" right="0">
        <Flex
          h="14"
          px="5"
          justifyContent="space-between"
          alignItems="center"
          bg="backgroundHeader"
        >
          <HStack>
            <Text variant="tertiary">{title}</Text>
            {Boolean(titleNumeric) && (
              <Badge variant="primary">{titleNumeric}</Badge>
            )}
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
            <Avatar boxSize="6" icon={<Img src={AVATAR} />} />
          </Flex>
        </Flex>

        {/* Content */}
        {children}
      </Box>
    </Container>
  )
}

export default Dashboard
