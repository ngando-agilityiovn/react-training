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
      color: 'textLight',
      background: 'primary',
      px: '0.75rem',
      py: '0.375rem',
      _hover: {
        borderColor: 'textWarning',
        backgroundColor: 'textWarning',
      },
    },
    outline: {
      borderColor: 'colorDark',
      color: 'secondary',
      px: '0.5rem',
      py: '0.125rem',
      _hover: {
        backgroundColor: 'colorDark',
      },
    },
    ghost: {
      color: 'secondary',
      _hover: {
        backgroundColor: 'colorDark',
      },
    },
  },
  defaultProps: {
    variant: 'solid',
  },
})
