import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Define your initial state
const initialState = {
  cartItems: [],
};

// Define your actions types
const LOAD_FROM_CART = 'LOAD_FROM_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';

// Define your actions
export const loadfromCart = (items) => ({
  type: LOAD_FROM_CART,
  payload:items
});
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const updateCartItem = (index, quantity) => ({
  type: UPDATE_CART_ITEM,
  payload: { index, quantity },
});

export const removeFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});
export const removeAllFromCart = () => ({
  type: REMOVE_ALL_FROM_CART,
});

// Define your reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
     case LOAD_FROM_CART:
      return {
        ...state,
        cartItems: JSON.parse(localStorage.getItem('RBKcartItems') || '[]'),
      };
    case ADD_TO_CART:
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingItem) {
        const updatedItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, Quantity: cartItem.Quantity + 1 };
          }
          return cartItem;
        });

        return {
          ...state,
          cartItems: updatedItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case UPDATE_CART_ITEM:
      const updatedItems = [...state.cartItems];
      updatedItems[action.payload.index].Quantity = action.payload.quantity;
      return {
        ...state,
        cartItems: updatedItems,
      };

    case REMOVE_FROM_CART:
      const filteredItems = state.cartItems.filter(
        (_, index) => index !== action.payload
      );
      localStorage.setItem('RBKcartItems', JSON.stringify(filteredItems));
      return {
        ...state,
        cartItems: filteredItems,
      };
    case REMOVE_ALL_FROM_CART:
      localStorage.removeItem('RBKcartItems');
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
