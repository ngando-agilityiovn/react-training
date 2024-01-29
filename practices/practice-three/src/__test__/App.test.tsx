import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'

// Components
import App from '../App'

describe('App component', () => {
  it('Render correcty', () => {
    const container = render(
      <ChakraProvider>
        <App />
      </ChakraProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
