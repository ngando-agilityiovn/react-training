import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from '@chakra-ui/react'

interface IFilter {
  name: string
  quantity: number
}

interface IFilterGroup {
  title: string
  data?: IFilter[]
}

const Filter = ({ title, data }: IFilterGroup) => {
  return (
    <>
      <h2>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize="20px"
            color="dark"
            fontWeight="medium"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {title === 'Price' ? (
          <>
            <Slider aria-label="slider-ex-1" defaultValue={200}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Flex gap={25}>
              <Input variant="outline" value={`$${0}`} p="10px" w="75px" />
              <Input variant="outline" value={`$${200}`} p="10px" w="75px" />
            </Flex>
          </>
        ) : (
          <CheckboxGroup colorScheme="blue" defaultValue={[]}>
            <VStack display="block">
              {data?.map(({ name, quantityName }) => {
                return (
                  <Flex
                    justifyContent="space-between"
                    fontSize="sm"
                    fontWeight="normal"
                    lineHeight="7"
                  >
                    <Checkbox value={name}>{name}</Checkbox>
                    <Text>({quantity})</Text>
                  </Flex>
                )
              })}
            </VStack>
          </CheckboxGroup>
        )}
      </AccordionPanel>
    </>
  )
}

export default Filter
