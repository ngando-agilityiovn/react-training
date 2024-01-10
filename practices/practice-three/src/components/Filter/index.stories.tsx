import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { Accordion, AccordionItem } from '@chakra-ui/react'

// Constants
import { FILTER } from '@/constants'

// Types
import { Title } from '@/types'

// Components
import Filter from '.'

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

export const Category: Story = {
  args: {
    title: Title.CATEGORY,
    dataFilter: FILTER.category,
  },
}

export const Brand: Story = {
  args: {
    title: Title.BRAND,
    dataFilter: FILTER.brand,
  },
}

export const Size: Story = {
  args: {
    title: Title.SIZE,
    dataFilter: FILTER.size,
  },
}

export const Price: Story = {
  args: {
    title: Title.PRICE,
  },
}
