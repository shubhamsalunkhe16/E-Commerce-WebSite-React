import {
  SET_ALL_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  SET_SELECTED_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_SELECTED_PRODUCTS,
  REMOVE_ALL_FROM_CART,
  ADD_QTY,
  REMOVE_QTY,
} from '../Constants/ProductContants';

export const productReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_ALL_PRODUCTS:
      return [...payload];
    default:
      return state;
  }
};

export const filteredProductReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_FILTERED_PRODUCTS:
      return [...payload];
    default:
      return state;
  }
};

export const selectedProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_PRODUCTS:
      return payload;
    case REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};

export const ShoppingCart = (state = [], { type, payload }) => {
  var newCart = [];
  // var uniqueNewCart = [];
  if (type === ADD_TO_CART) {
    payload.qty = 1;

    const isInCart = state.find(({ id }) => id === payload.id);
    const indexInCart = state.findIndex(({ id }) => id === payload.id);
    if (isInCart) {
      isInCart.qty += 1;
      state.splice(indexInCart, 1, isInCart);

      newCart = [...state];
    } else {
      newCart = [...state, payload];
    }
  }

  var remainingCart = [];
  if (type === REMOVE_FROM_CART) {
    remainingCart = state.filter((product) => {
      return product.id !== payload.id;
    });
  }

  if (type === ADD_QTY) {
    payload.qty += 1;
    const indexInCart = state.findIndex(({ id }) => id === payload.id);
    state.splice(indexInCart, 1, payload);
    newCart = [...state];
  }

  if (type === REMOVE_QTY) {
    payload.qty -= 1;
    const indexInCart = state.findIndex(({ id }) => id === payload.id);
    state.splice(indexInCart, 1, payload);
    newCart = [...state];
  }

  switch (type) {
    case ADD_TO_CART:
      return newCart;
    case REMOVE_FROM_CART:
      return remainingCart;
    case REMOVE_ALL_FROM_CART:
      return [];
    case ADD_QTY:
      return newCart;
    case REMOVE_QTY:
      return newCart;

    default:
      return state;
  }
};
