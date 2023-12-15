import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'md',
    fontWeight: 'medium',
    lineHeight: 'shorter',
    fontSize: 'sm',
  },
  variants: {
    default: {},
    solid: {
      color: 'white',
      background: 'primary',
      px: '3',
      py: '1.5',
      _hover: {
        borderColor: 'textWarning',
        backgroundColor: 'textWarning',
      },
    },
    outline: {
      borderColor: 'backgroundInactive',
      color: 'secondary',
      px: '2',
      py: '0.5',
      _hover: {
        backgroundColor: 'backgroundInactive',
      },
    },
    ghost: {
      color: 'secondary',
      _hover: {
        backgroundColor: 'backgroundInactive',
      },
    },
    error: {
      color: 'white',
      backgroundColor: 'textError',
    },
  },
  defaultProps: {
    variant: 'default',
  },
})
