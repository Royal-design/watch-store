import { ReactElement, createContext, useEffect, useState } from "react";

export type productType = {
  sku: string;
  name: string;
  price: number;
};

// const initState: productType[] = [];
const initState: productType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99
  }
];

export type UseProductContextType = { products: productType[] };
const initContextState: UseProductContextType = { products: [] };

export const ProductsContext =
  createContext<UseProductContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ProductProvider = ({ children }: ChildrenType) => {
  const [products, setProducts] = useState<productType[]>(initState);

  // useEffect(() => {
  //   const fetchProduct = async (): Promise<productType[]> => {
  //     const data = await fetch("http://localhost:3500/products")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err.message);
  //       });
  //     return data;
  //   };

  //   fetchProduct().then((products) => setProducts(products));
  // }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
