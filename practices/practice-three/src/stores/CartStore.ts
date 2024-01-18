import { create } from 'zustand'

interface BearState {
  carts: string[]
  handleAddToCart: (product: string) => void
}

export const useBearStore = create<BearState>()((set) => ({
  carts: JSON.parse(localStorage.getItem('CartProducts') || '[]'),
  handleAddToCart: (product: string): void => {
    try {
      set((state) => {
        const newState = { ...state, carts: [...state.carts, product] }
        localStorage.setItem('CartProducts', JSON.stringify(newState.carts))
        return newState
      })
    } catch (error) {
      console.log(error)
    }
  }
}))
