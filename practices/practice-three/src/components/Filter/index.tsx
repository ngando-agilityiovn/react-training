import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Text,
  VStack
} from '@chakra-ui/react'
import SliderCustom from '../SliderCustom'

interface IFilter {
  name: string
  quantity: number
}

interface IFilterGroup {
  title: string
  data?: IFilter[]
  handleFilterCategory?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFilterBrand?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFilterSize?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFilterPrice?: (value: number) => void
}

const Filter = ({
  title,
  data,
  handleFilterCategory,
  handleFilterBrand,
  handleFilterSize,
  handleFilterPrice
}: IFilterGroup) => {
  const handleOnChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterCategory?.(e)
    handleFilterBrand?.(e)
    handleFilterSize?.(e)
  }

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
            <SliderCustom onSliderChange={handleFilterPrice} />
          </>
        ) : (
          <CheckboxGroup colorScheme="blue" defaultValue={[]}>
            <VStack display="block">
              {data?.map(({ name, quantity }) => {
                return (
                  <Flex
                    justifyContent="space-between"
                    fontSize="sm"
                    fontWeight="normal"
                    lineHeight="7"
                  >
                    <Checkbox value={name} onChange={handleOnChangeCheckbox}>
                      {name}
                    </Checkbox>
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
