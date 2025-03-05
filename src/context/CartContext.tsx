import { createContext, useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CartItemDto, CartOutputDto, ShoppingOutput } from "../api/todo";
import {
  addToCart,
  clearCart,
  decrementCartItem,
  getCartItems,
  incrementCartItem,
  removeFromCart,
} from "../services/apiService";

interface CartContextType {
  cart: CartOutputDto;
  addToCart: (product: ShoppingOutput) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  clearCart: () => Promise<void>;
  syncCart: () => Promise<void>;
  incrementQuantity: (id: string) => Promise<void>;
  decrementQuantity: (id: string) => Promise<void>;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    data: cart,
    isLoading,
    refetch,
  } = useQuery<CartOutputDto>({
    queryKey: ["cart"],
    queryFn: async () => {
      const cartItems = await getCartItems();
      return cartItems;
    },
    enabled: !!localStorage.getItem("token"),
    staleTime: 0,
    initialData: { userId: "", items: [] },
  });
  useEffect(() => {
    refetch();
  }, [refetch]);

  const syncCart = async () => {
    await refetch();
  };
  const handleAddToCart = async (product: ShoppingOutput) => {
    const existingItem = cart?.items.find(
      (item: CartItemDto) => item.shoppingId._id === product._id
    );

    if (existingItem) {
      await incrementCartItem(existingItem.shoppingId._id);
    } else {
      await addToCart(product._id);
    }

    await refetch();
  };

  const handleRemoveFromCart = async (id: string) => {
    await removeFromCart(id);
    await refetch();
  };

  const handleClearCart = async () => {
    try {
      await clearCart();
      await syncCart();
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const handleIncrement = async (id: string) => {
    await incrementCartItem(id);
    await refetch();
  };

  const handleDecrement = async (id: string) => {
    await decrementCartItem(id);
    await refetch();
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart || { userId: "", items: [] },
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart,
        clearCart: handleClearCart,
        incrementQuantity: handleIncrement,
        decrementQuantity: handleDecrement,
        isLoading,
        syncCart: syncCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("CartContext must be used within a CartProvider");
  return context;
};
