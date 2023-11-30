import { defineStyleConfig } from '@chakra-ui/react'

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: '6',
      backgroundColor: 'white',
      boxShadow: 'primary',
    },
  },
  variants: {
    primary: {
      field: {
        borderRadius: '6',
        _placeholder: {
          color: 'textPlaceholder',
        },
        px: '3',
        py: '1.5',
      },
    },
  },
})
