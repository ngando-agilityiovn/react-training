// Types
import { IProduct } from '@/types';

// Components
import CartItem from './CartItem';

interface IListCartProps {
  data: IProduct[];
}

export const ListCart = ({ data }: IListCartProps) => {
  return (
    <>
      {data?.map(({ ...props }: IProduct) => {
        return <CartItem key={props.id} props={props} />;
      })}
    </>
  );
};

export default ListCart;
