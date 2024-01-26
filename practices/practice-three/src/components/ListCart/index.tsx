// Stores
// import { cartStore } from '@/stores'

// Types
import { IProduct } from '@/types'

// Components
import CartItem from './CartItem'
import { cartStore } from '@/stores'

export const ListCart = () => {
  const { carts } = cartStore()

  return (
    <>
      {carts?.map(({ ...props }: IProduct) => {
        return <CartItem key={props.id} props={props} />
      })}
    </>
  )
}

export default ListCart
