import { defineStyleConfig } from '@chakra-ui/react'

export const Text = defineStyleConfig({
  baseStyle: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 'normal',
    color: 'textTertiary',
  },
  variants: {
    default: {
      fontSize: 'md',
      lineHeight: '7',
    },
    primary: {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
    secondary: {
      color: 'textDanger',
      fontSize: 'sm',
    },
    tertiary: {
      color: 'backgroundWarning',
      fontSize: 'md',
    },
    title: {
      color: 'textTitle',
      fontSize: 'sm',
      fontWeight: 'bold',
    },
  },
  defaultProps: {
    variant: 'default',
  },
})
