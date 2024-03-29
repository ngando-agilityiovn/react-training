import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'

interface IInputProps {
  variant?: 'input' | 'textarea'
  name: string
  label?: string
  value?: string | number
  placeholder: string
  onChange: (value: string, name: string) => void
  type?: string
  errorMessage?: string
  isReadOnly?: boolean
  errorBorderColor?: string
  addOn?: string
  width?: string
  marginBot?: string
}

const InputField = ({
  variant = 'input',
  name,
  label,
  value,
  placeholder,
  onChange,
  type = 'text',
  errorMessage,
  isReadOnly,
  errorBorderColor,
  addOn,
  marginBot,
  width = '100%',
}: IInputProps) => {
  return (
    <FormControl isRequired isInvalid={!!errorMessage} mb={marginBot}>
      <FormLabel
        fontSize="sm"
        letterSpacing="wider"
        fontWeight="medium"
        lineHeight="shorter"
        color="secondary"
      >
        {label}
      </FormLabel>
      <InputGroup gap="2">
        {Boolean(addOn?.length) && (
          <InputLeftElement
            pointerEvents="none"
            color="colorGray"
            fontSize="sm"
            fontWeight="medium"
            lineHeight="shorter"
            letterSpacing="wider"
            children={addOn}
          />
        )}
        <Input
          as={variant}
          readOnly={isReadOnly}
          variant="primary"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value, e.target.name)}
          type={type}
          aria-label="Input label"
          placeholder={placeholder}
          errorBorderColor={errorBorderColor}
          width={width}
        />
      </InputGroup>

      {/* {Error message} */}
      {errorMessage && (
        <FormErrorMessage color="textError">{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default InputField
