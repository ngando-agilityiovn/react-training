import { extendTheme } from '@chakra-ui/react'

// Typography theme
import { fonts } from '@/themes/typography'

// Colors theme
import { colors } from '@/themes/colors'

// Components theme
import { Input } from '@/themes/components/input'

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    Input,
  },
})
