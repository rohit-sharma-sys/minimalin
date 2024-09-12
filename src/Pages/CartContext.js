import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingProductIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity = product.quantity; // Update quantity
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return updatedItems;
      } else {
        const newItems = [...prevItems, product];
        localStorage.setItem('cartItems', JSON.stringify(newItems));
        return newItems;
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item.id !== productId);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
