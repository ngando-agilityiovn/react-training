import { renderHook } from '@testing-library/react'

// Stores
import { cartStore } from '../CartStore'
import { act } from 'react-dom/test-utils'

// Components

describe('CartStore', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  const product = {
    id: '0',
    name: 'T-shirt',
    ratings: 5,
    price: 200,
    currency: '$',
    quantity: 2,
    size: 'Medium',
    color: '#ffd3d3',
    reviews: [
      {
        id: 1,
        reviewer: 'John Doe',
        comments: 'Great product, very satisfied with my purchase!'
      },
      {
        id: 2,
        reviewer: 'Jane Smith',
        comments: 'Excellent service and fast delivery.'
      },
      {
        id: 3,
        reviewer: 'Bob Johnson',
        comments: 'Product was okay, but could be improved in certain areas.'
      }
    ],
    images: [
      'https://source.unsplash.com/random/587x691/?fashion',
      'https://source.unsplash.com/random/587x691/?clothes',
      'https://source.unsplash.com/random/587x691/?t-shirt',
      'https://source.unsplash.com/random/587x691/?adidas'
    ]
  }

  it('Add single product to cart', () => {
    const { result } = renderHook(() => cartStore())

    act(() => {
      result.current.addSingleProduct(product)
    })

    expect(result.current.carts).toHaveLength(1)
    expect(result.current.carts[0].id).toBe('0')
  })

  it('Remove product from cart', () => {
    const { result } = renderHook(() => cartStore())

    act(() => {
      result.current.addSingleProduct(product)
    })

    act(() => {
      result.current.removeProducts('0')
    })

    expect(result.current.carts).toHaveLength(0)
  })

  it('Update quantity of a product in the cart', () => {
    const { result } = renderHook(() => cartStore())

    act(() => {
      result.current.addSingleProduct(product)
    })

    act(() => {
      result.current.updateProductQuantity('0', 'increase', 0)
    })

    expect(result.current.carts[0].quantity).toBe(1)

    act(() => {
      result.current.updateProductQuantity('1', 'decrease')
    })

    expect(result.current.carts[0].quantity).toBe(1)
  })

  it('Update product color to cart', () => {
    const { result } = renderHook(() => cartStore())

    act(() => {
      result.current.addSingleProduct(product)
    })

    act(() => {
      result.current.updateProductColor('#ffd3d3', '0')
    })

    expect(result.current.carts[0].color).toBe('#ffd3d3')
  })

  it('Update product size to cart', () => {
    const { result } = renderHook(() => cartStore())

    act(() => {
      result.current.addSingleProduct(product)
    })

    act(() => {
      result.current.updateProductSize('Medium', '0')
    })

    expect(result.current.carts[0].size).toBe('Medium')
  })

  it('Add product to cart', () => {
    const { result } = renderHook(() => cartStore())

    act(() => {
      result.current.addProducts(product, 2)
    })

    expect(result.current.carts).toHaveLength(1)
    expect(result.current.carts[0].id).toBe('0')
  })
})
