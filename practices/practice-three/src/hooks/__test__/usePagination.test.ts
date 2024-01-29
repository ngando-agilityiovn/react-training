import { renderHook, waitFor, act } from '@testing-library/react'

// Services
import { fetchData } from '@/services'

// Hooks
import usePagination from '@/hooks/usePagination'

jest.mock('@/services/api')

const mockProductDetail = [
  {
    id: '1',
    description: 'clothes'
  },
  {
    id: '2',
    description: 'shoes'
  }
]

describe('usePagination', () => {
  it('should return page numbers', async () => {
    // eslint-disable-next-line no-extra-semi
    ;(fetchData as jest.Mock).mockResolvedValue(mockProductDetail)

    const { result } = renderHook(() => usePagination(20))
    await waitFor(() => expect(result.current.isLoading).toEqual(false))

    expect(result.current.pageNumbers).toEqual([0, 1, 2])
  })

  it('should return pageIndex correctly when press next page', async () => {
    // eslint-disable-next-line no-extra-semi
    ;(fetchData as jest.Mock).mockResolvedValue(mockProductDetail)

    const { result } = renderHook(() => usePagination(20))

    act(() => {
      result.current.handleNextPage()
    })

    expect(result.current.pageIndex).toEqual(2)
  })
})
