import { defineStyleConfig } from '@chakra-ui/react'

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: '1.5',
      backgroundColor: 'white',
      boxShadow: 'primary',
    },
  },
  variants: {
    primary: {
      field: {
        borderRadius: '1.5',
        _placeholder: {
          color: 'textPlaceholder',
        },
        px: '3',
        py: '1.5',
      },
    },
  },
})
