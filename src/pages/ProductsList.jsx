import React, { useContext, useEffect } from "react";
import { productsContext } from "../contexts/ProductsProvider";

const ProductsList = () => {
  const { products, getProducts } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <img width={400} src={item.image} alt="" />
          <h2>{item.title}</h2>
          <h3>{item.price}$</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
