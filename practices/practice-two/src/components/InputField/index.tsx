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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  errorMessage?: string
  isReadOnly?: boolean
  errorBorderColor?: string
  children?: string
  width?: string
}

export const InputField = ({
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
  children,
}: IInputProps) => {
  return (
    <FormControl isRequired isInvalid={!!errorMessage}>
      <FormLabel
        fontSize="sm"
        letterSpacing="wider"
        fontWeight="medium"
        lineHeight="shorter"
        color="secondary"
      >
        {label}
      </FormLabel>
      <InputGroup gap="0.5rem">
        <InputLeftElement
          pointerEvents="none"
          color="colorGray"
          fontSize="sm"
          fontWeight="medium"
          lineHeight="shorter"
          letterSpacing="wider"
          children={children}
          px="2rem"
        />
        <Input
          as={variant}
          readOnly={isReadOnly}
          variant="primary"
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          aria-label="Input label"
          placeholder={placeholder}
          errorBorderColor={errorBorderColor}
          paddingLeft="3.25rem"
          width="100%"
        />
      </InputGroup>

      {/* {Error message} */}
      {errorMessage && (
        <FormErrorMessage color="textError">{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  )
}
