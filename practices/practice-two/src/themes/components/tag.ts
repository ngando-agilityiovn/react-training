import { defineStyleConfig } from '@chakra-ui/react'

export const Tag = defineStyleConfig({
  baseStyle: {
    container: {
      fontWeight: 'medium',
      lineHeight: 'extraShorter',
      letterSpacing: 'wide',
      borderRadius: '0.25rem',
      fontSize: 'xs',
      backgroundColor: 'backgroundInactive',
      color: 'textInactive',
      px: '0.5rem',
      py: '0.063rem',
    },
  },
  variants: {
    default: {},
    success: {
      container: {
        backgroundColor: 'backgroundSuccess',
        color: 'textSuccess',
      },
    },
    error: {
      container: {
        backgroundColor: 'backgroundError',
        color: 'textError',
      },
    },
    warning: {
      container: {
        backgroundColor: 'backgroundWarning',
        color: 'textWarning',
      },
    },
    outline: {
      container: {
        backgroundColor: 'white',
        color: 'secondary',
        borderColor: 'yellow',
      },
    },
    ghost: {
      container: {
        backgroundColor: 'none',
        color: 'secondary',
      },
    },
  },
})
