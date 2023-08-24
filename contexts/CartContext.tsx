
import { Item } from "@/types";
import { createContext, useContext, useState } from "react";

// type declarations

type CartItem = {
  item: Item;
  qty: number;
};

type CartCTXProps = {
  cartItems: CartItem[];
  //   setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addCartItem: (cartItem: CartItem) => void;
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
};

type CartProviderProps = {
  children: React.ReactNode;
};

//crate context
const CartContext = createContext<CartCTXProps | null>(null);

//context provider
const CartProvider: React.FC<CartProviderProps> = ({
  children,
}: CartProviderProps) => {

  //states
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  //add new cart item to the list
  const addCartItem = (cartItem: CartItem) => {
    setCartItems((prevItems) => ({ ...prevItems, cartItem }));
  };

  //date sent with context provider
  const data = {
    cartItems,
    addCartItem,
    cartTotal,
    setCartTotal,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};


//custom hook to access cart
const useCartContext = (): CartCTXProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("CartContext must be used within CartContext.Provider");
  }
  return { ...context };
};

export {CartProvider,useCartContext}
