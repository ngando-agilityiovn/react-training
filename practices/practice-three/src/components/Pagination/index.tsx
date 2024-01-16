import { useFetch } from '@/hooks'
import { Button, Flex } from '@chakra-ui/react'

interface IPagination {
  handlePrevPage: () => void
  handleNextPage: () => void
  pageButtons: number[]
  selectPage: (num: number) => void
  pageIndex: number
}

const Pagination = ({
  handlePrevPage,
  handleNextPage,
  pageButtons,
  selectPage,
  pageIndex
}: IPagination) => {
  const { dataAll } = useFetch()
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
        isDisabled={pageIndex == 1 ? true : false}
      >
        Preview
      </Button>

      {pageButtons?.map((index) => (
        <Button
          variant="outline"
          background={
            pageIndex === index + 1 ? 'backgroundNumberPagination' : 'white'
          }
          borderRadius="4px"
          _hover={{
            background: 'backgroundNumberPagination'
          }}
          onClick={() => selectPage(index + 1)}
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
        isDisabled={pageIndex <= dataAll!.length / 9 ? false : true}
      >
        Next
      </Button>
    </Flex>
  )
}

export default Pagination
