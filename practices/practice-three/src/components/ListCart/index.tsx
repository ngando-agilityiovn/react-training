// Stores
import { cartStore } from '@/stores'

// Types
import { IProduct } from '@/types'

// Components
import CartItem from './CartItem'

export const ListCart = () => {
  const { carts } = cartStore()

  let total = 0

  carts?.forEach((item) => (total += item.price! * item.quantity!))

  return (
    <>
      {carts?.map(({ ...props }: IProduct) => {
        return <CartItem props={props} />
      })}
    </>
  )
}

export default ListCart
