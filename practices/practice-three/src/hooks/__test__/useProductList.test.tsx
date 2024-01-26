import { act, renderHook, waitFor } from '@testing-library/react'

// Services
import { fetchData } from '@/services'

// Constants
import { CARD_DATA } from '@/constants'

// Hooks
import useProductList from '../useProductlist'

jest.mock('@/services/api')

describe('useProductList', () => {
  const mockFetchData = fetchData as jest.Mock

  it('Fetches data', async () => {
    const data = CARD_DATA
    mockFetchData.mockResolvedValue(data)

    const { result } = renderHook(() => useProductList())
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    })

    await waitFor(() => expect(result.current.isLoading).toEqual(false))

    expect(result.current.products).toEqual(data)
  })
})
