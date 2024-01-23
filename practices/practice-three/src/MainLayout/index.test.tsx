import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import MainLayout from '.'

// Components
import { Banner } from '@/components'

describe('MainLayout component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <MainLayout children={<Banner />} />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
