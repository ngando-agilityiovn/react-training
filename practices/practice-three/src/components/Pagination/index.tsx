import { useProductList } from '@/hooks'
import { Button, Flex } from '@chakra-ui/react'

interface IPagination {
  handlePrevPage: () => void
  handleNextPage: () => void
  pageNumbers: number[]
  selectPage: (num: number) => void
  pageIndex: number
}

const Pagination = ({
  handlePrevPage,
  handleNextPage,
  pageNumbers,
  selectPage,
  pageIndex
}: IPagination) => {
  const { dataAll } = useProductList()

  const totalProduct = dataAll?.length || 0
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

      {pageNumbers?.map((index) => (
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
        isDisabled={pageIndex <= totalProduct / 9 ? false : true}
      >
        Next
      </Button>
    </Flex>
  )
}

export default Pagination
