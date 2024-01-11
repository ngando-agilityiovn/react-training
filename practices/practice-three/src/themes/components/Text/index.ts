import { defineStyleConfig } from '@chakra-ui/react'

export const Text = defineStyleConfig({
  baseStyle: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 'normal',
    color: 'textTertiary',
    fontSize: 'sm',
  },
  variants: {
    default: {
      fontSize: 'md',
      lineHeight: '7',
    },
    primary: {
      fontSize: 'lg',
      fontWeight: 'medium',
    },
    secondary: {
      color: 'textDanger',
    },
    tertiary: {
      color: 'backgroundWarning',
      fontSize: 'md',
    },
    title: {
      color: 'textTitle',
      fontWeight: 'meidum',
    },
  },
  defaultProps: {
    variant: 'default',
  },
})
