import { Box, Flex, IconButton, Text } from '@chakra-ui/react'

interface IColorItem {
  color: string
}

interface IRadioGroup {
  data: IColorItem[]
}

const ColorGroup = ({ data }: IRadioGroup) => {
  return (
    <>
      <Text color="backgroundWarning" fontWeight="medium" mb="14px">
        Choose a Color
      </Text>
      <Flex gap="6">
        {data.map(({ color }) => (
          <Box color={color}>
            <IconButton
              _hover={{ background: color }}
              aria-label=""
              bg={color}
              w={16}
              h={16}
              rounded="100%"
              position="relative"
              // TODO: Implement handle after
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
                zIndex: -1
              }}
            />
          </Box>
        ))}
      </Flex>
    </>
  )
}

export default ColorGroup
