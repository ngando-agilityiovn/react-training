import { defineStyleConfig } from '@chakra-ui/react'

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: '0.375rem',
      backgroundColor: 'textLight',
      boxShadow: 'primary',
    },
  },
  variants: {
    primary: {
      field: {
        borderRadius: '0.375rem',
        _placeholder: {
          color: 'textDarkEmphasis',
        },
        px: '0.75rem',
        py: '0.375rem',
      },
    },
  },
})
