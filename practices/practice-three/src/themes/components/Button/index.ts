import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'md',
    fontWeight: 'medium',
    lineHeight: 'shorter',
    fontSize: 'sm',
    _hover: {
      borderColor: 'primary',
      backgroundColor: 'white',
      color: 'primary',
    },
  },
  variants: {
    default: {
      borderRadius: '30px',
      border: '1px solid',
      borderColor: 'gainsboro',
      color: 'textDanger',
      fontSize: 'sm',
      fontWeight: 'normal',
    },
    solid: {
      color: 'white',
      fontSize: 'sm',
      fontWeight: 'semibold',
      borderRadius: '50px',
      border: '1px solid',
      borderColor: 'primary',
      background: 'primary',
      px: '3.5',
      py: '2',
      _hover: {
        borderColor: 'primary',
        backgroundColor: 'white',
        color: 'primary',
      },
    },
    outline: {
      color: 'textInactive',
      px: '3.5',
      py: '2',
      fontSize: 'sm',
      borderRadius: '50px',
      border: ' 1px solid',
      borderColor: 'backgroundDark',
      background: 'white',
      boxShadow: 'primary',
      _hover: {
        background: 'textDanger',
        color: 'white',
        border: 'none',
      },
    },
    ghost: {
      color: 'darkToLight',
      fontSize: 'sm',
      fontWeight: 'normal',
      _hover: {
        backgroundColor: 'primary',
        color: 'white',
        borderRadius: '10px',
      },
    },
    error: {
      color: 'white',
      backgroundColor: 'red',
    },
  },
  defaultProps: {
    variant: 'default',
  },
})
