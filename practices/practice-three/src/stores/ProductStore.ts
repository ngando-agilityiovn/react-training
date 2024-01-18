import { NOTIFY } from '@/constants/error'
import { getListCart, setListCart } from '@/helpers/DataLocalStorage'
import { IProduct } from '@/types'
import { create } from 'zustand'

// Define state
type TState = {
  carts: IProduct[]
}

// Difine props for CartStore
type TActions = {
  handleAddToCart: (product: IProduct) => void
  handleRemoveFromCart: (productId: string) => void
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
    try {
      const itemFind = get().carts.find((item) => {
        return item.id == product.id
      })

      if (itemFind) {
        itemFind.quantity++
        set({ carts: [...get().carts] })
        setListCart(get().carts)
      } else {
        set({ carts: [...get().carts, { ...product, quantity: 1 }] })
        setListCart(get().carts)
      }
    } catch (error) {
      alert(NOTIFY.ADD_FAILD)
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
  }
}))
