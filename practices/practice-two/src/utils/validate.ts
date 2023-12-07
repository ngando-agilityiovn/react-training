import { REGEX } from '@/constants/regex'

interface ValiProps {
  name: string
  value: string
}

export const validate = ({ name, value }: ValiProps) => {
  let errorMessage = ''
  if (name) {
    errorMessage = value && !REGEX.NAME.test(value) ? 'Invalid name' : ''
  }

  if (value.trim() === '') {
    errorMessage = 'This field is required'
  }

  return errorMessage
}
