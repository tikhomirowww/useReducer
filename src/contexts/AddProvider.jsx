import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

export const AddContext = createContext();

const API = "http://localhost:8004/products";

const INIT_STATE = {
  products: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

const AddProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProduct = async () => {
    if (
      !productData.name.trim() ||
      !productData.price.trim() ||
      !productData.description.trim() ||
      !productData.image.trim()
    ) {
      alert("Some inputs are empty!");
      return;
    }

    try {
      await axios.post(API, productData);
      const { data } = await axios.get(API);
      dispatch({ type: "ADD_PRODUCTS", payload: data });
      setShowModal(false);
      setProductData({
        name: "",
        price: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const value = {
    showModal,
    setShowModal,
    productData,
    handleInputChange,
    handleAddProduct,
    products: state.products,
  };

  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
};

export default AddProvider;
