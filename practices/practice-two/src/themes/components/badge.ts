import { defineStyleConfig } from '@chakra-ui/react'

export const Badge = defineStyleConfig({
  baseStyle: {
    fontSize: 'xs',
    fontWeight: 'medium',
    color: 'secondary',
    borderWidth: '0.438rem',
    borderRadius: 'full',
  },
  variants: {
    default: {},
    primary: {
      backgroundColor: 'badgeBackground',
      borderColor: 'badgeBackground',
      color: 'primary',
    },
  },
  defaultProps: {
    variant: 'default',
  },
})
