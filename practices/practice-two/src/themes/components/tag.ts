import { defineStyleConfig } from '@chakra-ui/react'

export const Tag = defineStyleConfig({
  baseStyle: {
    container: {
      fontWeight: 'medium',
      lineHeight: 'extraShorter',
      letterSpacing: 'wide',
      borderRadius: '0.25rem',
      fontSize: 'xs',
    },
  },
  variants: {
    solid: {
      backgroundColor: 'colorDark',
      color: 'secondary',
    },
    outline: {
      backgroundColor: 'textLight',
      color: 'secondary',
    },
    ghost: {
      _focus: {
        backgroundColor: 'textLight',
        color: 'primary',
      },
    },
  },
})
