import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { BENEFIT_DATA } from '@/constants'

// Components
import BenefitList from '.'

export default {
  title: 'Components/BenefitList',
  component: BenefitList,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof BenefitList>

export const Default: Story = {
  args: {
    benefitData: BENEFIT_DATA,
  },
}
