import { CartOutputDto, ShoppingOutput } from "../api/todo";

export interface CartContextType {
  cart: CartOutputDto;
  addToCart: (product: ShoppingOutput) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  clearCart: () => Promise<void>;
  syncCart: () => Promise<void>;
  incrementQuantity: (id: string) => Promise<void>;
  decrementQuantity: (id: string) => Promise<void>;
  isLoading: boolean;
}

export type { CartOutputDto, CartItemDto, ShoppingOutput } from "../api/todo";
