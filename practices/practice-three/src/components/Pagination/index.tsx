import { Button, Flex } from '@chakra-ui/react'

interface IPagination {
  text: string
}

interface IPaginationGroup {
  data: IPagination[]
}

const Pagination = ({ data }: IPaginationGroup) => {
  return (
    <Flex justifyContent="center" py="8px" mt="63px" gap="8px">
      {data.map(({ text }) => (
        <Button
          variant="outline"
          background="white"
          borderRadius="4px"
          _hover={{
            background: 'backgroundNumberPagination',
          }}
        >
          {text}
        </Button>
      ))}
    </Flex>
  )
}

export default Pagination