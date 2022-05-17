import {
  SET_ALL_PRODUCTS,
  REMOVE_SELECTED_PRODUCTS,
  SET_SELECTED_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  ADD_QTY,
  REMOVE_QTY,
} from '../Constants/ProductContants';
import {
  getAllProducts,
  getProductsByCategory,
  getProductById,
} from '../../Services/ProductService';

export const fetchandSetAllProducts = () => async (dispatch) => {
  const response = await getAllProducts();
  dispatch(setAllProducts(response.data));
  dispatch(setFilteredProducts(response.data));
};

export const fetchandSetProductsByCategory = (category) => async (dispatch) => {
  const response = await getProductsByCategory(category);
  dispatch(setFilteredProducts(response.data));
};

export const fetchandSetProductById = (productId) => async (dispatch) => {
  const response = await getProductById(productId);
  console.log('***fetchandSetProductById', response.data);

  dispatch(setSelectedProduct(response.data));
};

export const setAllProducts = (products) => {
  return {
    type: SET_ALL_PRODUCTS,
    payload: products,
  };
};

export const setFilteredProducts = (products) => {
  return {
    type: SET_FILTERED_PRODUCTS,
    payload: products,
  };
};

export const setSelectedProduct = (products) => {
  return {
    type: SET_SELECTED_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCTS,
  };
};

export const removeAllFromCart = () => {
  return {
    type: REMOVE_ALL_FROM_CART,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const removeQty = (product) => {
  return {
    type: REMOVE_QTY,
    payload: product,
  };
};

export const addQty = (product) => {
  return {
    type: ADD_QTY,
    payload: product,
  };
};
