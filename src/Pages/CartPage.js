import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
        <Link to="/shop" className="continue-shopping-button">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart<span className="dots">...</span></h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="cart-item">
              <td>
                <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
              </td>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td className="cart-item-quantity">
                <button className="quantity-button minus-button" onClick={() => handleQuantityChange(item.id, { target: { value: item.quantity - 1 } })}>-</button>
                <span>{item.quantity}</span>
                <button className="quantity-button plus-button" onClick={() => handleQuantityChange(item.id, { target: { value: item.quantity + 1 } })}>+</button>
              </td>
              <td>
                <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary container-with">
        <h3>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
        <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
      </div>
    </div>
  );
}

export default CartPage;
