import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { BENEFIT_DATA } from '@/constants'

// Components
import DescriptionTab from '.'

describe('DescriptionTag component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <DescriptionTab
          title="Product Description"
          text="When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole."
          data={BENEFIT_DATA}
        />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
