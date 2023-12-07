import { REGEX } from '@/constants'

interface ValiProps {
  name: string
  value: string | number
}

export const validate = ({ name, value }: ValiProps) => {
  let errorMessage = ''
  if (name) {
    if (name === 'name') {
      // If 'value' is present and doesn't match a specified regex, set an error message
      errorMessage =
        value && !REGEX.NAME.test(String(value)) ? 'Invalid name' : ''
    } else if (name === 'estimation') {
      errorMessage = isNaN(Number(value))
        ? 'Invalid estimation (should be a number)'
        : ''
    }
  }

  // If 'value' is an empty string or not a number, set a generic 'required' error message
  if (String(value).trim() === '') {
    errorMessage = 'This field is required'
  }

  return errorMessage
}

interface ValiProps {
  name: string
  value: string | number
}

export const hihi = ({ name, value }: ValiProps) => {
  let errorMessage = ''

  if (name) {
    if (name === 'name') {
      // If 'value' is present and doesn't match a specified regex, set an error message
      errorMessage =
        value && !REGEX.NAME.test(String(value)) ? 'Invalid name' : ''
    } else if (name === 'estimation') {
      // If 'value' is not a valid number, set an error message
      errorMessage = isNaN(Number(value))
        ? 'Invalid estimation (should be a number)'
        : ''
    }
  }

  // If 'value' is an empty string or not a number, set a generic 'required' error message
  if (String(value).trim() === '') {
    errorMessage = 'This field is required'
  }

  return errorMessage
}

// const handleValidate = () => {
//   // Validate the 'name' field of 'projectDataForm'
//   const nameError = validate({ name: 'name', value: projectDataForm.name })

//   // Validate the 'estimation' field of 'projectDataForm'
//   const estimationError = validate({
//     name: 'estimation',
//     value: projectDataForm.estimation,
//   })

//   // Set the errors in the state
//   setErrors({
//     name: nameError,
//     estimation: estimationError,
//     // Add other fields if needed
//   })

//   console.log('projectDataForm', projectDataForm.estimation)

//   // Check if there are any errors
//   if (nameError || estimationError) {
//     return false // Validation failed
//   }

//   return true // Validation passed
// }
