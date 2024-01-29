import { act, renderHook, waitFor } from '@testing-library/react';

// Services
import { fetchData } from '@/services';

// Constants
import { CARD_DATA } from '@/constants';

// Hooks
import useProductList from '../useProductlist';

jest.mock('@/services/api');

describe('useProductList', () => {
  const mockFetchData = fetchData as jest.Mock;

  afterEach(jest.clearAllMocks);

  it('Fetches data', async () => {
    process.env.REACT_APP_API_PROJECT = 'http::/';

    const mockData = CARD_DATA;
    mockFetchData.mockResolvedValue(mockData);

    const { result } = renderHook(() => useProductList());
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    await waitFor(() => expect(result.current.isLoading).toEqual(false));

    expect(result.current.products).toEqual(mockData);
  });

  it('Should return error when call api request fail', async () => {
    process.env.REACT_APP_API_PROJECT = 'http::/';

    const { result } = renderHook(() => useProductList());
    expect(result.current.isLoading).toEqual(false);

    expect(result.current.error).toBeUndefined();
  });
});
