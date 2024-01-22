import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { BENEFIT_DATA, DATA_COLOR, REVIEWERS, SIZE_OPTIONS } from '@/constants'

// Components
import ProductDetail from '.'

export default {
  title: 'Components/ProductDetail',
  component: ProductDetail,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof ProductDetail>

export const Default: Story = {
  args: {
    id: 0,
    name: 'T-shirt',
    price: 188990,
    category: 'Accessories',
    brand: 'Adidas',
    rating: 0,
    size: SIZE_OPTIONS,
    currency: '$',
    quantity: 0,
    reviews: REVIEWERS,
    colors: DATA_COLOR,
    description:
      'T-shirt - Fashion is a dynamic and ever-evolving form of self-expression that transcends mere clothing; it is a cultural language that communicates identity, creativity, and societal trends. Rooted in history, fashion has served as a reflection of the times, mirroring shifts in social attitudes, technological advancements, and artistic movements. From the elaborate garments of ancient civilizations to the avant-garde designs of contemporary runways, fashion encapsulates the spirit of each era.\nBeyond its aesthetic appeal, fashion is a powerful tool for individual empowerment. The way we dress can influence our confidence, mood, and perception by others. Whether adhering to tradition or pushing the boundaries of convention, fashion allows individuals to articulate their uniqueness and assert their place in the world.",',
    information: BENEFIT_DATA,
    images: [
      'https://source.unsplash.com/random/587x691/?fashion',
      'https://source.unsplash.com/random/587x691/?clothes',
      'https://source.unsplash.com/random/587x691/?t-shirt',
      'https://source.unsplash.com/random/587x691/?adidas'
    ]
  }
}
