import React, {useContext,createContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {loadfromCart,addToCart,updateCartItem, removeFromCart,removeAllFromCart} from './store';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const loadCartItems = () => {
    const storedCartItems = localStorage.getItem('RBKcartItems');
    if (storedCartItems) {
      dispatch(loadfromCart(storedCartItems))
    }
  };
  useEffect(() => {
    loadCartItems();
  }, []);
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('RBKcartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handleAddToCart = (item) => {
    if (cartItems[1] === 'ok') {
      dispatch(addToCart([]));
    }

    dispatch(addToCart(item));
    toast.success('Successfully added to cart');
  };

  const handleUpdateCartItem = (index, quantity) => {
    dispatch(updateCartItem(index, quantity));
  };

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleClearCart = () => {
    dispatch(removeAllFromCart());
  };
  return (
    <CartContext.Provider
    value={{
      cartItems,
      handleAddToCart,
      handleUpdateCartItem,
      handleRemoveFromCart,
      handleClearCart
    }}
  >
    <ToastContainer />
    {children}
  </CartContext.Provider>
  );
  
};
export const useCart = () => useContext(CartContext);
