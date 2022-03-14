import axios from "axios";

export const getAllProducts = async () => {
  try {
    return await axios.get(`https://fakestoreapi.com/products`);
  } catch (error) {
    console.log("Error while fetching ", error);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    return await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
  } catch (error) {
    console.log("Error while fetching ", error);
  }
};

export const getProductById = async (productId) => {
  try {
    return await axios.get(`https://fakestoreapi.com/products/${productId}`);
  } catch (error) {
    console.log("Error while fetching ", error);
  }
};
