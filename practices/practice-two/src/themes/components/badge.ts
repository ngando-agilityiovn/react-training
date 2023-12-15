import { defineStyleConfig } from '@chakra-ui/react'

export const Badge = defineStyleConfig({
  baseStyle: {
    fontSize: 'xs',
    fontWeight: 'medium',
    color: 'secondary',
    borderWidth: '7px',
    borderRadius: 'full',
  },
  variants: {
    default: {},
    primary: {
      backgroundColor: 'backgroundBadge',
      borderColor: 'backgroundBadge',
      color: 'secondary',
    },
  },
  defaultProps: {
    variant: 'default',
  },
})
