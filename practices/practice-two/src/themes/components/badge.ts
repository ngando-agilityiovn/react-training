import { defineStyleConfig } from '@chakra-ui/react'

export const Badge = defineStyleConfig({
  baseStyle: {
    fontSize: '0.625rem',
    fontWeight: 'medium',
    color: 'red',
    borderWidth: '0.438rem',
    borderRadius: 'full',
  },
  variants: {
    default: {},
    primary: {
      backgroundColor: 'colorDark',
      color: 'colorDarkEmphasis',
      px: '6px',
    },
  },
  defaultProps: {
    variant: 'default',
  },
})
