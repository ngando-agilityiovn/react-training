import { Box, Button, Container, Flex, Heading, Img } from '@chakra-ui/react'

const Banner = () => {
  return (
    <Box
      h="287px"
      background="linear-gradient(75deg, #f4e8f3 0%, #f3eff6 52.07%, #eee0f9 102.02%)"
      pos="relative"
      mx="-80px"
    >
      <Container h="100%" maxW="1280px" p="0">
        <Flex h="100%" justifyContent="space-between">
          <Box pl="55" pt="64px">
            <Heading
              w="377px"
              color="primary"
              fontWeight="bold"
              fontSize="34px"
            >
              Grab Upto 50% Off On Selected Headphone
            </Heading>
            <Button variant="solid" mt="43px" disabled>
              Buy Now
            </Button>
          </Box>
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/card-f9463.appspot.com/o/banner.png?alt=media&token=74d4d6cd-551b-4a73-96b7-5dfed2daf5ae"
            alt="Image of banner"
            pr="98px"
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default Banner
