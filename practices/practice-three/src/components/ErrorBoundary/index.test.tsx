import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { ErrorBoundary } from '..'

describe('ErrorBoundary component', () => {
  it('renders snapshot', async () => {
    const ThrowError = () => {
      throw new Error('Test')
    }
    render(
      <ChakraProvider>
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>
      </ChakraProvider>
    )
    expect(screen.getByTestId('errorboundary')).toBeVisible()
  })
})
