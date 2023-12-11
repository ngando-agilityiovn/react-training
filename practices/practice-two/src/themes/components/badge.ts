import { defineStyleConfig } from '@chakra-ui/react'

export const Badge = defineStyleConfig({
  baseStyle: {
    fontSize: 'xs',
    fontWeight: 'medium',
    color: 'secondary',
    borderWidth: '7px',
    borderRadius: '6px',
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
