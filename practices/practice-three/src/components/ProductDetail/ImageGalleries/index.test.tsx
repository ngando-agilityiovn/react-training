import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { IMAGE_PRODUCT } from '@/constants'

// Components
import ImageGalleries from '.'

describe('ButtonQuantity component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <ImageGalleries data={IMAGE_PRODUCT} />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
