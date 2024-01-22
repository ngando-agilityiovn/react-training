import useSWR from 'swr'
import { useEffect, useState } from 'react'

// Types
import { IProduct } from '@/types'

// Services
import { fetchData } from '@/services'

// Constants
import { BASE_URL, productLimit } from '@/constants'

const usePagination = (total: number) => {
  const [pageIndex, setPageIndex] = useState(1)
  const [category, setCategory] = useState<string[]>([])
  const [brand, setBrand] = useState<string[]>([])
  const [size, setSize] = useState<string[]>([])

  const paramCategory = category?.join('|') || ''
  const paramBrand = brand?.join('|') || ''
  const paramSize = size?.join('|') || ''

  const { data, error, isLoading } = useSWR<IProduct[]>(
    `${BASE_URL}?page=${pageIndex}&limit=${productLimit}&category=${
      paramCategory ? `^${paramCategory}$` : ''
    }&brand=${paramBrand ? `^${paramBrand}$` : ''}&size=${
      paramSize ? `^${paramSize}$` : ''
    }`,
    fetchData
  )

  const handleFilterCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory((prevCategory) =>
      e?.target?.checked && !prevCategory?.includes(e.target.value)
        ? [...prevCategory, e.target.value]
        : prevCategory.filter((value) => value !== e.target.value)
    )
  }

  const handleFilterBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand((prevBrand) =>
      e?.target?.checked && !prevBrand?.includes(e.target.value)
        ? [...prevBrand, e.target.value]
        : prevBrand.filter((value) => value !== e.target.value)
    )
  }

  const handleFilterSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize((prevSize) =>
      e?.target?.checked && !prevSize?.includes(e.target.value)
        ? [...prevSize, e.target.value]
        : prevSize.filter((value) => value !== e.target.value)
    )
  }

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
    pageIndex,
    handleFilterCategory,
    handleFilterBrand,
    handleFilterSize
    // handleFilterPrice
  }
}

export default usePagination
