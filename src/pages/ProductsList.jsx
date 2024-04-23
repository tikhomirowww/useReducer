import React, { useContext, useEffect } from "react";
import { productsContext } from "../contexts/ProductsProvider";

const ProductsList = () => {
  const { getProducts, products } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h1>Products List</h1>
      <div className="allProducts">
        {products.map((product, index) => (
          <div className="oneProduct" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <span className="price">${product.price}</span>
            <p className="desc">{product.description}</p>

            <div className="btns-prod">
              <button className="editBtn">Edit</button>
              <button className="deleteBtn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
