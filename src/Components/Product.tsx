import { productType } from "../Context/ProductProvider";
import { ReducerActionType } from "../Context/CartItemProvider";
import { ReducerAction } from "../Context/CartItemProvider";
import { ReactElement, memo } from "react";

type PropsType = {
  product: productType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTION: ReducerActionType;
  incart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTION,
  incart
}: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;

  console.log(img);

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTION.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = incart ? "→ Item in Cart: ✔️" : null;

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );

  return content;
};
function areProductEqual(
  { product: prevProduct, incart: PrevInCart }: PropsType,
  { product: nextProduct, incart: nextInCart }: PropsType
) {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof productType] ===
        nextProduct[key as keyof productType]
      );
    }) && PrevInCart === nextInCart
  );
}
const memoizedProduct = memo<typeof Product>(Product, areProductEqual);

export default memoizedProduct;
