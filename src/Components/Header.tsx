import { Nav } from "./Nav";
import { UseCart } from "../Hooks/UseCart";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = UseCart();
  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>ACME.Co</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );

  return content;
};
