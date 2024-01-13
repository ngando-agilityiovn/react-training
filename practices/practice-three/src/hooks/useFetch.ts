import useSWR from 'swr'
import { fetchData } from '@/helpers/api'
import { IProduct } from '@/types/product'

const useFetch = () => {
  const { data, error, isLoading } = useSWR<IProduct[]>(
    'https://657c3495853beeefdb98e5f4.mockapi.io/Product',
    fetchData
  )

  return {
    data,
    error,
    isLoading
  }
}

export default useFetch
