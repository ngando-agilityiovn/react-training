import { extendTheme } from '@chakra-ui/react'

// Typography theme
import { fonts, lineHeights } from './typography'

// theme
import { colors } from './colors'
import { shadows } from './shadow'

// Components theme
import { Text } from './components/text'
import { Button } from './components/button'
import { Input } from './components/input'
import { Tag } from './components/tag'
import { Badge } from './components/badge'

export const theme = extendTheme({
  fonts,
  colors,
  lineHeights,
  shadows,
  components: {
    Text,
    Button,
    Input,
    Tag,
    Badge,
  },
})
