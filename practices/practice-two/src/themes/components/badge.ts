import { defineStyleConfig } from '@chakra-ui/react'

export const Badge = defineStyleConfig({
  baseStyle: {
    fontSize: '0.625rem',
    fontWeight: 'medium',
    color: 'secondary',
    borderWidth: '0.438rem',
    borderRadius: 'full',
  },
  variants: {
    default: {},
    primary: {
      backgroundColor: 'backgroundInactive',
      color: 'textInactive',
    },
  },
  defaultProps: {
    variant: 'default',
  },
})
