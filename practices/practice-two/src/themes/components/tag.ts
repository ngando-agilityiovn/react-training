import { defineStyleConfig } from '@chakra-ui/react'

export const Tag = defineStyleConfig({
  baseStyle: {
    container: {
      fontWeight: 'medium',
      lineHeight: 'extraShorter',
      letterSpacing: 'wide',
      borderRadius: '1',
      fontSize: 'xs',
      backgroundColor: 'backgroundInactive',
      color: 'textInactive',
      px: '2',
      py: '1',
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
