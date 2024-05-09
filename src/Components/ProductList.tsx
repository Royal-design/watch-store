import { UseCart } from "../Hooks/UseCart";
import { useProductHook } from "../Hooks/useProductHook";
import { UseProductContextType } from "../Context/ProductProvider";
import { ReactElement } from "react";
import Product from "./Product";

export const ProductList = () => {
  const { dispatch, REDUCER_ACTION, cart } = UseCart();
  const { products } = useProductHook();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTION={REDUCER_ACTION}
          incart={inCart}
        />
      );
    });
  }

  const content = <main className="main main-products"> {pageContent} </main>;

  return content;
};
