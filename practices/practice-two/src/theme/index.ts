import { extendTheme } from '@chakra-ui/react'

// Typography theme
import { fonts, lineHeights } from './typography'

// theme
import { colors } from './colors'
import { shadows } from './shadow'

// Components theme
import { Text } from './components/texts'
import { Button } from './components/buttons'
export const theme = extendTheme({
  fonts,
  colors,
  lineHeights,
  shadows,
  components: {
    Text,
    Button,
  },
})
