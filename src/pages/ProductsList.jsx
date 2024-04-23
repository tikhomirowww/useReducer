import React, { useContext, useEffect } from "react";
import { productsContext } from "../contexts/ProductsProvider";

const ProductsList = () => {
  const {deleteProduct, products, getProducts } = useContext(productsContext);
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
          <button onClick={() => deleteProduct(item.id)}>delete</button>
          <button>edit</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
