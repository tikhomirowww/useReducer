import React, { useContext } from "react";
import { AddContext } from "../contexts/AddProvider";

const AddProduct = () => {
  const {

    productData,
    handleInputChange,
    handleAddProduct,
  } = useContext(AddContext);

  return (
    <div className="container">
      <form className="addForm">
        <h1>Add Product</h1>

        <form action="">
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
          />
          <button onClick={handleAddProduct}>Add product</button>
        </form>
      </form>
    </div>
  );
};

export default AddProduct;
