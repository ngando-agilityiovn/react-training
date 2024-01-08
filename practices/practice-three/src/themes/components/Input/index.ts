import { defineStyleConfig } from '@chakra-ui/react'

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: '10px',
      backgroundColor: 'white',
      border: '1px solid darkGrey40',
      color: 'textInfo',
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '7',
    },
  },
  variants: {
    primary: {
      field: {
        _placeholder: {
          color: 'textPlaceholder',
        },
        px: '3',
        py: '1.5',
        borderRadius: '30px',
        border: '1px solid darkGrey30',
        background: 'darkGrey30',
      },
    },
  },
})
