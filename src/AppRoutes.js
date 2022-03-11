import React from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import CartPage from "./Pages/CartPage/CartPage";
import BlogPage from "./Pages/BlogPage/BlogPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Products" element={<SearchPage />} />
      <Route path="/Blog" element={<BlogPage itemsPerPage={4} />} />
      <Route path="Product/:productId" element={<ProductDetailPage />} />
      <Route path="Cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
