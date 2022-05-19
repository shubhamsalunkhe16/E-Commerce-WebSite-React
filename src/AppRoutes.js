import React from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProductDetailPage from './Pages/ProductDetailPage/ProductDetailPage';
import CartPage from './Pages/CartPage/CartPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import TestPage from './Pages/TestPage/TestPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<SearchPage />} />
      <Route path='/blogs' element={<BlogPage itemsPerPage={4} />} />
      <Route path='/product/:productId' element={<ProductDetailPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/test' element={<TestPage />} />
    </Routes>
  );
};

export default AppRoutes;
