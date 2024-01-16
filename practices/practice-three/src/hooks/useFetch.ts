import useSWR from 'swr'
import { useState } from 'react'

// Types
import { IProduct } from '@/types'

// Helpers
import { fetchData } from '@/helpers'

const useFetch = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const limit = 9

  const { data, error, isLoading } = useSWR<IProduct[]>(
    `https://657c3495853beeefdb98e5f4.mockapi.io/Product?page=${pageIndex}&limit=${limit}`,
    fetchData
  )
  const pageButtons = []

  if (data) {
    const totalPage = data.length / 9
    console.log(totalPage, 'totalpage')

    for (let i = 0; i < totalPage; i++) {
      pageButtons.push(i)
      console.log(i)
    }

    console.log(pageButtons, 'pages button')
  }
  // Handle prev pagination
  const handlePrevPage = () => {
    setPageIndex((prevPage) => prevPage - 1)
  }

  // Handle next pagination
  const handleNextPage = () => {
    setPageIndex((prevPage) => prevPage + 1)
  }
  console.log(pageIndex, 'page index')

  return {
    data,
    error,
    isLoading,
    handlePrevPage,
    handleNextPage,
    pageButtons,
    limit
  }
}

export default useFetch
