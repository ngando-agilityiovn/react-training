import { Button, Flex } from '@chakra-ui/react'

interface IPagination {
  onPrevPage: () => void
  onNextPage: () => void
  pageNumbers: number[]
  onSelectPage: (num: number) => void
  pageIndex: number
  total: number
}

const Pagination = ({
  onPrevPage,
  onNextPage,
  pageNumbers,
  onSelectPage,
  pageIndex,
  total
}: IPagination) => {
  // const { products } = useProductList()

  // const totalProduct = products?.length || 0
  return (
    <Flex justifyContent="center" py="8px" mt="63px" gap="8px">
      <Button
        variant="outline"
        background="white"
        borderRadius="4px"
        _hover={{
          background: 'blueChalk'
        }}
        onClick={onPrevPage}
        isDisabled={pageIndex === 1 ? true : false}
      >
        Preview
      </Button>

      {pageNumbers?.map((index) => (
        <Button
          variant="outline"
          background={pageIndex === index + 1 ? 'blueChalk' : 'white'}
          borderRadius="4px"
          _hover={{
            background: 'blueChalk'
          }}
          onClick={() => onSelectPage(index + 1)}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        variant="outline"
        background="white"
        borderRadius="4px"
        _hover={{
          background: 'blueChalk'
        }}
        onClick={onNextPage}
        isDisabled={pageIndex <= total / 9 ? false : true}
      >
        Next
      </Button>
    </Flex>
  )
}

export default Pagination
