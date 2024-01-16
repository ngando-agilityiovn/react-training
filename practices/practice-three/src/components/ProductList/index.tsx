import { memo } from 'react'
import { Flex } from '@chakra-ui/react'

// Types
import { IProduct } from '@/types'

//  Icon components
import ProductCard from '../ProductCard'

interface IProductList {
  data: IProduct[] | undefined
}

const ProductList = ({ data }: IProductList) => {
  return (
    <Flex flexWrap="wrap" gap="5">
      {/* Cart product */}
      {data?.map(({ ...props }) => {
        return <ProductCard props={props} />
      })}
    </Flex>
  )
}

export default memo(ProductList)
