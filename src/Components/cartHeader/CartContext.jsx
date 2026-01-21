import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartUpdated, setCartUpdated] = useState(false);

  const triggerCartUpdate = () => setCartUpdated(prev => !prev);

  return (
    <CartContext.Provider value={{ cartUpdated, triggerCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
}
