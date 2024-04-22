import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsList from "../pages/ProductsList";
import AddProduct from "../pages/AddProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/add" element={<AddProduct />} />
    </Routes>
  );
};

export default MainRoutes;
