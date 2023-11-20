import { extendTheme } from '@chakra-ui/react'

// Typography theme
import { fonts, lineHeights } from './typography'

// Colors theme
import colors from './colors'

// Components theme
import { Text } from './components/text'

export const theme = extendTheme({
  fonts,
  colors,
  lineHeights,
  components: {
    Text,
  },
})
