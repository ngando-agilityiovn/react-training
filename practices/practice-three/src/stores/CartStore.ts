import { create } from 'zustand'

// Types
import { IProduct, TAction } from '@/types'

// Helpers
import { getListCart, setListCart } from '@/helpers'

// Define state
type TState = {
  carts: IProduct[]
}

// Difine props for CartStore
type TActions = {
  handleAddToCart: (product: IProduct) => void
  handleRemoveFromCart: (productId: string) => void
  handleChangeColor: (value: string, productId: string) => void
  handleUpdateQuantity: (productId: string, action: TAction) => void
  addProduct: (product: IProduct) => void
}
// Create store using Zustand
export const cartStore = create<TState & TActions>((set, get) => ({
  // Initialize shopping cart from data stored in localStorage
  carts: getListCart(),

  /**
   * Add product to cart.
   * @param product - The product needs to be added to the cart
   */
  handleAddToCart: (product: IProduct): void => {
    const itemFind = get().carts.find((item) => {
      return item.id == product.id
    })

    if (itemFind) {
      itemFind.quantity!++
      set({ carts: [...get().carts] })

      setListCart(get().carts)
    } else {
      set({ carts: [...get().carts, { ...product, quantity: 1 }] })
      setListCart(get().carts)
    }
  },

  handleRemoveFromCart: (productId: string): void => {
    set((state) => {
      const newState = {
        ...state,
        carts: state.carts.filter((item) => item.id !== productId)
      }
      setListCart(newState.carts)
      return newState
    })
  },

  handleChangeColor: (value: string, productId: string): void => {
    set({
      carts: get().carts.map((item) => ({
        ...item,
        color: item?.id === productId ? value : item.color
      }))
    })
    setListCart(get().carts)
  },

  handleUpdateQuantity: (productId: string, action: TAction): void => {
    set((state) => {
      const newState = {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === productId) {
            const increment = action === 'increase' ? 1 : -1
            const newQuantity = (item.quantity || 0) + increment
            const updatedItem = {
              ...item,
              quantity: newQuantity >= 1 ? newQuantity : 1
            }
            return updatedItem
          }
          return item
        })
      }
      setListCart(newState.carts)
      return newState
    })
  },

  addProduct: (product: IProduct): void => {
    const itemFind = get().carts.find((item) => {
      return item.id == product.id
    })

    if (itemFind) {
      set({
        carts: get().carts.map((item) => ({
          ...item,
          itemFind: item?.id === itemFind ? product : item?.id
        }))
      })
      setListCart(get().carts)
    }
  }
}))
