import { useContext } from "react";
import { CartContext } from "../Context/CartItemProvider";
import { useCartContextType } from "../Context/CartItemProvider";

export const UseCart = (): useCartContextType => {
  return useContext(CartContext);
};
