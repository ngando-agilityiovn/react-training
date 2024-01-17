import useSWR from 'swr'
import { useEffect, useState } from 'react'

// Types
import { IProduct } from '@/types'

// Services
import { fetchData } from '@/services'

const usePagination = (total: number) => {
  const [pageIndex, setPageIndex] = useState(1)
  const limit = 9
  const {
    data: limitedData,
    error,
    isLoading
  } = useSWR<IProduct[]>(
    `https://657c3495853beeefdb98e5f4.mockapi.io/Product?page=${pageIndex}&limit=${limit}`,
    fetchData
  )

  const pageNumbers = []

  if (limitedData && total) {
    const totalPage = total / limit

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
    if (pageIndex < total / limit) {
      setPageIndex((prevPage) => prevPage + 1)
    }
  }

  const selectPage = (num: number) => {
    setPageIndex(num)
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pageIndex])

  return {
    limitedData,
    error,
    isLoading,
    handlePrevPage,
    handleNextPage,
    pageNumbers,
    limit,
    selectPage,
    pageIndex
  }
}

export default usePagination
