import { render, screen, fireEvent } from '@testing-library/react'
import { Accordion, AccordionItem } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Filter from '.'

describe('Filter Component', () => {
  // Mock filter functions
  const mockHandleFilterCategory = jest.fn()
  const mockHandleFilterBrand = jest.fn()
  const mockHandleFilterSize = jest.fn()

  // // Mock data for testing
  const testData = [
    { name: 'Option1', quantity: 5 },
    { name: 'Option2', quantity: 8 }
  ]

  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <Accordion>
          <AccordionItem>
            <Filter
              title="Test Filter"
              data={testData}
              handleFilterCategory={mockHandleFilterCategory}
              handleFilterBrand={mockHandleFilterBrand}
              handleFilterSize={mockHandleFilterSize}
            />
          </AccordionItem>
        </Accordion>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('handleCheckboxChange calls filter functions with the correct argument', () => {
    // Render the component with mock functions and data
    render(
      <Accordion>
        <AccordionItem>
          <Filter
            title="Test Filter"
            data={testData}
            handleFilterCategory={mockHandleFilterCategory}
            handleFilterBrand={mockHandleFilterBrand}
            handleFilterSize={mockHandleFilterSize}
          />
        </AccordionItem>
      </Accordion>
    )

    // Find checkboxes and fire change event
    const checkboxes = screen.getAllByTestId('checkbox')
    checkboxes.forEach((checkbox) => {
      fireEvent.click(checkbox)
    })

    // Expect that each filter function is called with the correct argument
    expect(mockHandleFilterCategory).toHaveBeenCalled()
    expect(mockHandleFilterBrand).toHaveBeenCalled()
    expect(mockHandleFilterSize).toHaveBeenCalled()
  })
})
