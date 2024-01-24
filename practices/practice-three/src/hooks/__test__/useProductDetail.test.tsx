import { renderHook, waitFor } from '@testing-library/react'

// Services
import { fetchData } from '@/services'

// Hooks
import useProductDetail from '../useProductDetail'

// Constants
import { CARD_DATA } from '@/constants'

jest.mock('@/services/api')

const mockProductDetail = {
  id: 1,
  data: CARD_DATA
}

describe('useProductDetail', () => {
  it('should return productDetail data', async () => {
    // eslint-disable-next-line no-extra-semi
    ;(fetchData as jest.Mock).mockResolvedValue(mockProductDetail)

    const { result } = renderHook(() => useProductDetail('1'))
    await waitFor(() => expect(result.current.isLoading).toEqual(false))

    expect(result.current.productDetail).toEqual(mockProductDetail)
  })
})
