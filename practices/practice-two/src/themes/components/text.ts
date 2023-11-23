import { defineStyleConfig } from '@chakra-ui/react'

export const Text = defineStyleConfig({
  baseStyle: {
    fontFamily: "'Inter', sans-serif",
  },
  variants: {
    primary: {
      fontSize: 'sm',
      color: 'primary',
      fontWeight: 'medium',
      lineHeight: 'shoter',
    },
    secondary: {
      color: 'secondary',
      fontWeight: 'normal',
      lineHeight: 'base',
      letterSpacing: 'extraShorter',
    },
  },
})