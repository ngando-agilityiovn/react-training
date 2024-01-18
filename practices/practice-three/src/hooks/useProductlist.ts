import useSWR from 'swr'

// Services
import { fetchData } from '@/services'

// Types
import { IProduct } from '@/types'

const useProductList = () => {
  const { data, isLoading, error } = useSWR<IProduct[]>(
    `https://657c3495853beeefdb98e5f4.mockapi.io/Product`,
    fetchData
  )

  return {
    products: data,
    isLoading,
    error
  }
}

export default useProductList
