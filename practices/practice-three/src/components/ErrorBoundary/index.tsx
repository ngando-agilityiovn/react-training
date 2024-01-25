// Libraries
import { Component } from 'react'
import { Box, Flex, Link, Heading } from '@chakra-ui/react'
import { NOTIFICATIONS } from '@/constants'

// Constants

interface State {
  hasError: boolean
}

interface Props {
  children: JSX.Element[] | JSX.Element
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <Box
          minH="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px="10px"
        >
          <Flex flexDir="column" justifyContent="center" alignItems="center">
            <Heading
              data-testid="errorboundary"
              fontSize="20px"
              as="h2"
              color="emperor"
            >
              {NOTIFICATIONS.API_ERROR}
            </Heading>
            <Link href="/">
              <Link color="black">{NOTIFICATIONS.BACK_TO_HOMEPAGE}</Link>
            </Link>
          </Flex>
        </Box>
      )
    }
    return children
  }
}
