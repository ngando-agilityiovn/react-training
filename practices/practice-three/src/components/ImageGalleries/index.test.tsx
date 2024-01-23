import { fireEvent, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { IMAGE_PRODUCT } from '@/constants'

// Components
import ImageGalleries from '.'

describe('ImageGalleries component', () => {
  it('Render correcty', () => {
    const { container } = render(
      <BrowserRouter>
        <ImageGalleries data={IMAGE_PRODUCT} />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('handleNextClick updates indexImage correctly', () => {
    const data = IMAGE_PRODUCT // Mock your data
    const { getByTestId } = render(<ImageGalleries data={data} />)

    fireEvent.click(getByTestId('nextClick'))

    expect(getByTestId('currentImage').getAttribute('src')).toBe(data[1])
  })

  it('handlePrevClick updates indexImage correctly', () => {
    const data = IMAGE_PRODUCT // Mock your data
    const { getByTestId } = render(<ImageGalleries data={data} />)

    fireEvent.click(getByTestId('prevClick'))

    expect(getByTestId('currentImage').getAttribute('src')).toBe(data[1])
  })
})
