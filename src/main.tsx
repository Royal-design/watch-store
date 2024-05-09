import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProvider } from "./Context/ProductProvider.tsx";
import { CartContextProvider } from "./Context/CartItemProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductProvider>
  </React.StrictMode>
);
