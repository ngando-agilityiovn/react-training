import useSWR from 'swr';
import { useEffect, useState } from 'react';

// Types
import { IProduct } from '@/types';

// Services
import { fetchData } from '@/services';

// Constants
import { BASE_URL, productLimit } from '@/constants';

const usePagination = (total: number) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [category, setCategory] = useState<string[]>([]);
  const [brand, setBrand] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const paramCategory = category?.join('|') || '';
  const paramBrand = brand?.join('|') || '';
  const paramSize = size?.join('|') || '';

  const { data, error, isLoading } = useSWR<IProduct[]>(
    `${BASE_URL}?page=${pageIndex}&limit=${productLimit}&category=${
      paramCategory ? `^${paramCategory}$` : ''
    }&brand=${paramBrand ? `^${paramBrand}$` : ''}&size=${
      paramSize ? `^${paramSize}$` : ''
    }`,
    fetchData
  );

  const handleFilterCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory((prevCategory) => {
      return e?.target?.checked
        ? [...prevCategory, e.target.value]
        : prevCategory.filter((value) => value !== e.target.value);
    });
  };

  const handleFilterBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand((prevBrand) => {
      return e?.target?.checked
        ? [...prevBrand, e.target.value]
        : prevBrand.filter((value) => value !== e.target.value);
    });
  };

  const handleFilterSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize((prevSize) => {
      return e?.target?.checked
        ? [...prevSize, e.target.value]
        : prevSize.filter((value) => value !== e.target.value);
    });
  };

  useEffect(() => {
    if (data && total) {
      const totalPage = total / productLimit;
      const pageNumber: number[] = [];
      for (let i = 0; i < totalPage; i++) {
        pageNumber.push(i);
      }
      setPageNumbers(pageNumber);
    }
  }, [data, total]);

  // Handle prev pagination
  const handlePrevPage = () => {
    if (pageIndex > 1) {
      setPageIndex((prevPage) => prevPage - 1);
    }
  };

  // Handle next pagination
  const handleNextPage = () => {
    if (pageIndex < total / productLimit) {
      setPageIndex((prevPage) => prevPage + 1);
    }
  };

  const handleSelectPage = (num: number) => {
    setPageIndex(num);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pageIndex]);

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
  };
};

export default usePagination;
