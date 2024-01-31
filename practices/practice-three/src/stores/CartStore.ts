import { create } from 'zustand';

// Types
import { IProduct, TUpdateProductQuantity } from '@/types';

// Helpers
import { getListCart, setListCart } from '@/helpers';

// Define state
type TState = {
  carts: IProduct[];
};

// Difine props for CartStore
type TActions = {
  addSingleProduct: (product: IProduct) => void;
  removeProducts: (productId: string) => void;
  updateProductColor: (value: string, productId: string) => void;
  updateProductSize: (value: string, productId: string) => void;
  updateProductQuantity: ({
    productId,
    action,
    productQuantity
  }: TUpdateProductQuantity) => void;
  addProducts: (product: IProduct, productQuantity: number) => void;
};

// Create store using Zustand
export const cartStore = create<TState & TActions>((set, get) => ({
  // Initialize shopping cart from data stored in localStorage
  carts: getListCart(),

  /**
   * Add product to cart.
   * @param product - The product needs to be added to the cart
   */
  addSingleProduct: (product: IProduct): void => {
    const originalCarts = get().carts;

    const foundItem = originalCarts.find(
      (item: IProduct) => item.id === product.id
    );

    if (foundItem) {
      // If the product is already in the cart
      const updatedCart = originalCarts.map((item: IProduct) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity! + 1
            }
          : item
      );

      set({
        carts: updatedCart
      });
      setListCart(updatedCart);
    } else {
      // If the product is not in the cart
      set({
        carts: [...originalCarts, { ...product, quantity: 1 }]
      });
      setListCart([...originalCarts, { ...product, quantity: 1 }]);
    }
  },

  removeProducts: (productId: string): void => {
    set((state) => {
      const newState = {
        ...state,
        carts: state.carts.filter((item) => item.id !== productId)
      };
      setListCart(newState.carts);
      return newState;
    });
  },

  updateProductColor: (value: string, productId: string): void => {
    const originalCarts = get().carts;

    set({
      carts: originalCarts.map((item) =>
        item.id === productId ? { ...item, color: value } : item
      )
    });
    setListCart(originalCarts);
  },

  updateProductSize: (value: string, productId: string): void => {
    const originalCarts = get().carts;

    set({
      carts: originalCarts.map((item) =>
        item.id === productId ? { ...item, size: value } : item
      )
    });
    setListCart(originalCarts);
  },

  updateProductQuantity: ({ productId, action, productQuantity }): void => {
    set((state) => {
      const newState = {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === productId) {
            const increment = action === 'increase' ? 1 : -1;
            const newQuantity = productQuantity! + increment;

            const updatedItem = {
              ...item,
              quantity: newQuantity
            };

            return updatedItem;
          }

          return item;
        })
      };

      setListCart(newState.carts);
      return newState;
    });
  },

  addProducts: (product: IProduct, productQuantity: number): void => {
    const originalCarts = get().carts;

    const foundItem = originalCarts.find((item) => item.id === product.id);

    if (foundItem) {
      const updatedCart = originalCarts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: productQuantity + foundItem.quantity! || 0,
              color: product.color,
              size: product.size
            }
          : item
      );
      set({
        carts: updatedCart
      });

      setListCart(updatedCart);
    } else {
      set({
        carts: [...originalCarts, { ...product, quantity: productQuantity }]
      });
      setListCart(originalCarts);
    }
  }
}));
