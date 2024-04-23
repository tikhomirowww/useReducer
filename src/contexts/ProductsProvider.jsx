import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";

export const productsContext = createContext();

const API = "http://localhost:8004/products";

const INIT_STATE = {
  products: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    const { data } = await axios.get(API);
    const action = {
      type: "GET_PRODUCTS",
      payload: data,
    };
    dispatch(action);
  }

  // ! delete
  async function deleteProduct(id) {
      await axios.delete(`${API}/${id}`);
      getProducts();
  }

  // ! delete with confirm 
  // async function deleteProduct(id) {
  //   const con = confirm("Are you sure?");
  //   if (con) {
  //     await axios.delete(`${API}/${id}`);
  //     getProducts();
  //   } else {
  //     alert("Delete is canceled");
  //   }
  // }

  const value = { deleteProduct, getProducts, products: state.products };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsProvider;
