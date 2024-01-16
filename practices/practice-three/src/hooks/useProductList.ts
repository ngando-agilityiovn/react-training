import useSWR from 'swr'
import { fetchData } from '@/services/api'
import { IProduct } from '@/types/product'

const useProductList = () => {
  const { data, error, isLoading } = useSWR<IProduct[]>(
    'https://practice-free-api.vercel.app/api/fashion-products',
    fetchData
  )

  return {
    data,
    error,
    isLoading
  }
}

export default useProductList
