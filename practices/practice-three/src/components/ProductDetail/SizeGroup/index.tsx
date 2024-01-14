import { Box, HStack, Radio, useRadioGroup, useColorModeValue } from '@chakra-ui/react';

interface CustomRadioProps {
  options: string[];
}

const SizeGroup = (props: CustomRadioProps) => {
  const { options, ...rest } = props;

  const { getRootProps, getRadioProps } = useRadioGroup({
    ...rest
  });

  const group = getRootProps();

  // Calculate color values outside the map function
  const boxBackgroundColor = useColorModeValue('whiteSmoke', 'darkModeColor');
  const hoverBackgroundColor = useColorModeValue('lightBlue', 'darkModeHoverColor');
  const selectedBackgroundColor = useColorModeValue('pattensBlue', 'darkModeSelectedColor');

  return (
    <HStack {...group}>
      {options?.map((value: string) => {
        const radio = getRadioProps({ value });

        return (
          <Box
            key={value}
            backgroundColor={boxBackgroundColor}
            borderRadius="8px"
            px="7px"
            py="10px"
            mr="11px"
            _hover={{
              backgroundColor: hoverBackgroundColor
            }}
            _after={{
              backgroundColor: selectedBackgroundColor
            }}
          >
            <Radio {...radio}>{value}</Radio>
          </Box>
        );
      })}
    </HStack>
  );
};

export default SizeGroup;
