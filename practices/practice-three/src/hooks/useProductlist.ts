import useSWR from 'swr'

// Services
import { fetchData } from '@/services'

// Types
import { IProduct } from '@/types'

const useProductList = () => {
  const {
    data: dataAll,
    isLoading,
    error
  } = useSWR<IProduct[]>(
    `https://657c3495853beeefdb98e5f4.mockapi.io/Product`,
    fetchData
  )

  return {
    dataAll,
    isLoading,
    error
  }
}

export default useProductList
