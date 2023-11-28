import { defineStyleConfig } from '@chakra-ui/react'

export const Badge = defineStyleConfig({
  baseStyle: {
    fontSize: '12',
    fontWeight: 'medium',
    color: 'secondary',
    borderWidth: '0.438rem',
    borderRadius: 'full',
  },
  variants: {
    default: {},
    primary: {
      backgroundColor: 'backgroundInactive',
      color: '#5E5ADB',
    },
  },
  defaultProps: {
    variant: 'default',
  },
})
