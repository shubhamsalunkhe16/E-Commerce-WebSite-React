import axios from "axios";

export const getAllProducts = async () => {
  return await axios.get(`https://fakestoreapi.com/products`);
};

export const getProductsByCategory = async (category) => {
  return await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
};

export const getProductById = async (productId) => {
  return await axios.get(`https://fakestoreapi.com/products/${productId}`);
};
