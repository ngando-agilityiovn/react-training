import { Button, Flex } from '@chakra-ui/react'

// Hooks
// import { useFetch } from '@/hooks'

interface IPagination {
  handlePrevPage: () => void
  handleNextPage: () => void
  pageButtons: number[]
}

const Pagination = ({
  handlePrevPage,
  handleNextPage,
  pageButtons
}: IPagination) => {
  // const { data } = useFetch()
  // const pageButtons = []

  // if (data) {
  //   const totalPage = data.length / 9
  //   console.log(totalPage)

  //   for (let i = 0; i < totalPage; i++) {
  //     pageButtons.push(i)
  //     console.log(i)
  //   }

  //   console.log(pageButtons, 'pages button')
  // }

  return (
    <Flex justifyContent="center" py="8px" mt="63px" gap="8px">
      <Button
        variant="outline"
        background="white"
        borderRadius="4px"
        _hover={{
          background: 'backgroundNumberPagination'
        }}
        onClick={handlePrevPage}
      >
        Preview
      </Button>

      {pageButtons?.map((index) => (
        <Button
          variant="outline"
          background="white"
          borderRadius="4px"
          _hover={{
            background: 'backgroundNumberPagination'
          }}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        variant="outline"
        background="white"
        borderRadius="4px"
        _hover={{
          background: 'backgroundNumberPagination'
        }}
        onClick={handleNextPage}
      >
        Next
      </Button>
    </Flex>
  )
}

export default Pagination
