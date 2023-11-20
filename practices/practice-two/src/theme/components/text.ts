import { defineStyleConfig } from '@chakra-ui/react'

export const Text = defineStyleConfig({
  baseStyle: {
    fontFamily: "'Inter', sans-serif",
  },
  variants: {
    primary: {
      fontSize: 'sm',
      color: 'textPrimary',
      fontWeight: 'medium',
      lineHeight: 'shoter',
    },

    secondary: {
      color: 'textSecondary',
      fontWeight: 'normal',
      lineHeight: 'base',
      letterSpacing: 'extraShorter',
    },
  },
  defaultProps: {
    variant: 'primary',
  },
})
