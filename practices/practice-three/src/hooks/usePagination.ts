import useSWR from 'swr'
import { useEffect, useState } from 'react'

// Types
import { IProduct } from '@/types'

// Services
import { fetchData } from '@/services'

// Constants
import { productLimit } from '@/constants'

const usePagination = (total: number) => {
  const [pageIndex, setPageIndex] = useState(1)

  const { data, error, isLoading } = useSWR<IProduct[]>(
    `https://657c3495853beeefdb98e5f4.mockapi.io/Product?page=${pageIndex}&limit=${productLimit}`,
    fetchData
  )

  const pageNumbers = []

  if (data && total) {
    const totalPage = total / productLimit

    for (let i = 0; i < totalPage; i++) {
      pageNumbers.push(i)
    }
  }
  // Handle prev pagination
  const handlePrevPage = () => {
    if (pageIndex > 1) {
      setPageIndex((prevPage) => prevPage - 1)
    }
  }

  // Handle next pagination
  const handleNextPage = () => {
    if (pageIndex < total / productLimit) {
      setPageIndex((prevPage) => prevPage + 1)
    }
  }

  const handleSelectPage = (num: number) => {
    setPageIndex(num)
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pageIndex])

  return {
    limitedData: data,
    error,
    isLoading,
    handlePrevPage,
    handleNextPage,
    pageNumbers,
    productLimit,
    handleSelectPage,
    pageIndex
  }
}

export default usePagination
