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
      backgroundColor: 'backgroundInactive',
      color: 'secondary',
    },
    outline: {
      backgroundColor: 'white',
      color: 'secondary',
    },
    ghost: {
      _focus: {
        backgroundColor: 'white',
        color: 'primary',
      },
    },
  },
})
