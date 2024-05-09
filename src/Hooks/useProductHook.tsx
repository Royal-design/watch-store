import { useContext } from "react";
import { UseProductContextType } from "../Context/ProductProvider";
import { ProductsContext } from "../Context/ProductProvider";

export const useProductHook = (): UseProductContextType => {
  return useContext(ProductsContext);
};
