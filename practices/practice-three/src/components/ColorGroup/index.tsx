import { Box, BoxProps, chakra, useRadio } from '@chakra-ui/react';

interface CustomRadioProps extends BoxProps {
  color: string;
}

const ColorGroup = (props: CustomRadioProps) => {
  const { color, ...radioProps } = props;
  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } = useRadio(radioProps);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps({})} hidden />
      <Box w="16" h="16" {...getRadioProps()} color={color} m="34px 12px 0 40px">
        <Box
          _hover={{ background: color }}
          aria-label=""
          bg={color}
          w={16}
          h={16}
          rounded="100%"
          {...getLabelProps()}
          content='""'
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="120%"
          height="120%"
          borderRadius="100%"
          _after={{
            position: 'absolute',
            content: '""',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            bg: 'transparent',
            borderRadius: '100%',
            border: `4px solid  ${state.isChecked ? color : 'transparent'}`
          }}
          zIndex={-1}
        />
      </Box>
    </chakra.label>
  );
};

export default ColorGroup;
