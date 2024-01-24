import useSWR from 'swr'

// Constants
import { BASE_URL } from '@/constants'

// Services
import { fetchData } from '@/services'

const useProductDetail = (id?: string) => {
  const { data, isLoading } = useSWR(`${BASE_URL}${id}`, fetchData)

  return {
    productDetail: data,
    isLoading
  }
}

export default useProductDetail
