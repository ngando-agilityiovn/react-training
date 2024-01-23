import { IProduct } from '@/types'

// Method get list cart in local storage
export const getListCart = () => {
  return JSON.parse(localStorage.getItem('CartProducts') || '[]')
}

// Method set list cart in local storage
export const setListCart = (carts: IProduct[]) => {
  localStorage.setItem('CartProducts', JSON.stringify(carts))
}
