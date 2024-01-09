import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { BENEFIT_DATA } from '@/constants'

// Components
import DescriptionTag from '.'

export default {
  title: 'Components/DescriptionTag',
  component: DescriptionTag,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof DescriptionTag>

export const Default: Story = {
  args: {
    descriptionTitle: 'Product Description',
    descriptionText:
      "When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole.",
    benefitData: BENEFIT_DATA,
  },
}
