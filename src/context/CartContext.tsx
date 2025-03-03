import { createContext, useContext, useState } from "react";
import { ShoppingOutput } from "../api/todo";

interface CartContextType {
  cart: ShoppingOutput[];
  addToCart: (product: ShoppingOutput) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ShoppingOutput[]>([]);

  const addToCart = (product: ShoppingOutput) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
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
