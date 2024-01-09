import { render } from '@testing-library/react'

// Components
import BenefitList from '.'
import { BENEFIT_DATA } from '@/constants'

jest.mock('@chakra-ui/react')
describe('BenefitList component', () => {
  it('Render correcty', () => {
    const container = render(<BenefitList benefitData={BENEFIT_DATA} />)
    expect(container).toMatchSnapshot()
  })
})
