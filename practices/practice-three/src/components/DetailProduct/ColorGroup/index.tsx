import { Box, Flex, IconButton, Text } from '@chakra-ui/react'

interface IColorItem {
  color: string
}

interface IRadioGroup {
  dataColor: IColorItem[]
}

const ColorGroup = ({ dataColor }: IRadioGroup) => {
  return (
    <>
      <Text color="backgroundWarning" fontWeight="medium" mb="14px">
        Choose a Color
      </Text>
      <Flex gap="12px">
        {dataColor.map(({ color }) => (
          <Box color={color}>
            <IconButton
              aria-label=""
              bg={color}
              w={30}
              h={30}
              rounded="100%"
              position="relative"
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
                border: `4px solid  ${color}`,
                zIndex: -1,
              }}
            />
          </Box>
        ))}
      </Flex>
    </>
  )
}

export default ColorGroup