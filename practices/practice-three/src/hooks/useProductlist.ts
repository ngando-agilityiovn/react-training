import useSWR from 'swr'

// Services
import { fetchData } from '@/services'

// Types
import { IProduct } from '@/types'

// Constants
import { BASE_URL } from '@/constants'

const useProductList = () => {
  const { data, isLoading, error } = useSWR<IProduct[]>(BASE_URL, fetchData)

  return {
    products: data,
    isLoading,
    error
  }
}

export default useProductList
