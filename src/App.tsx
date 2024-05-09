import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Cart } from "./Components/Cart";
import { ProductList } from "./Components/ProductList";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  );

  return content;
}

export default App;
