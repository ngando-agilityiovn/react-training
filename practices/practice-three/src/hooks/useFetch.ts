import useSWR from 'swr'
import { fetchData } from '@/helpers/api'
import { IProduct } from '@/types/product'

const useFetch = () => {
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

export default useFetch
