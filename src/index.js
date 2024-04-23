import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductsProvider from "./contexts/ProductsProvider";
import { BrowserRouter } from "react-router-dom";
import AddProvider from "./contexts/AddProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AddProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </AddProvider>
  </BrowserRouter>
);
