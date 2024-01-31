// Types
import { IProduct, TUpdateProductQuantity } from '@/types';

// Components
import CartItem from './CartItem';

interface IListCartProps {
  data: IProduct[];
  removeProducts: (productId: string) => void;
  updateProductColor: (value: string, productId: string) => void;
  updateProductSize: (value: string, productId: string) => void;
  updateProductQuantity: ({
    productId,
    action,
    productQuantity
  }: TUpdateProductQuantity) => void;
}

export const ListCart = ({
  data,
  removeProducts,
  updateProductColor,
  updateProductSize,
  updateProductQuantity
}: IListCartProps) => {
  return (
    <>
      {data?.map(({ ...props }: IProduct) => {
        return (
          <CartItem
            key={props.id}
            props={props}
            removeProducts={removeProducts}
            updateProductColor={updateProductColor}
            updateProductSize={updateProductSize}
            updateProductQuantity={updateProductQuantity}
          />
        );
      })}
    </>
  );
};

export default ListCart;
