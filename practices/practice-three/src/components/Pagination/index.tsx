import { productLimit } from '@/constants'
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
        isDisabled={pageIndex === 1}
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
        isDisabled={!(pageIndex <= total / productLimit)}
      >
        Next
      </Button>
    </Flex>
  )
}

export default Pagination
