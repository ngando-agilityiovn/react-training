import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { FILTER } from '@/constants'

// Components
import Filter from '.'
import { Accordion, AccordionItem } from '@chakra-ui/react'

export default {
  title: 'Components/Filter',
  component: Filter,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Accordion>
          <AccordionItem>
            <Story />
          </AccordionItem>
        </Accordion>
      </BrowserRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof Filter>

export const Catogory: Story = {
  args: {
    title: 'Catogory',
    data: FILTER.category,
  },
}

export const Brand: Story = {
  args: {
    title: 'Brand',
    data: FILTER.brand,
  },
}

export const Size: Story = {
  args: {
    title: 'Size',
    data: FILTER.size,
  },
}

export const Price: Story = {
  args: {
    title: 'Price',
    data: FILTER.category,
  },
}
