import { UseCart } from "../Hooks/UseCart";
type PropsType = {
  viewCart: boolean;
};

export const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = UseCart();

  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shopping Cart &copy; {year}</p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;

  return content;
};
