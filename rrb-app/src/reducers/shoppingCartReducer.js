import products from "../json/products.json";

import {
  ADD_TO_CART,
  REMOVE_ONE_ITEM_FROM_CART,
  REMOVE_ALL_ITEMS_FROM_CART,
  CLEAR_CART,
} from "../types";

export const initState = {
  products,
  cart: [],
};

export const shoppingCartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newItem = state.products.products.find(
        (product) => product.id === action.payload
      );

      let itemCart = state.cart.find((item) => item.id === newItem.id);

      return itemCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    case REMOVE_ONE_ITEM_FROM_CART:
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };

    case REMOVE_ALL_ITEMS_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case CLEAR_CART:
      return initState;

    default:
      return state;
  }
};