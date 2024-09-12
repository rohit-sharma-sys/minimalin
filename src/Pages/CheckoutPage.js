import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <h2>Your Cart is Empty</h2>
        <button className="back-to-shop-button" onClick={() => navigate('/shop')}>Back to Shop</button>
      </div>
    );
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    // Clear cart items before proceeding to payment
    // (Assuming you have a method to clear the cart)
    // clearCart(); 

    // Redirect to payment page
    navigate('/payment');
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>Review your order and provide shipping information to complete the purchase.</p>
      </div>
      <div className="checkout-content">
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="checkout-item">
                <img src={item.thumbnail} alt={item.title} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <p className="checkout-item-title">{item.title}</p>
                  <p className="checkout-item-price">Price: ${item.price.toFixed(2)}</p>
                  <p className="checkout-item-quantity">Quantity: {item.quantity || 1}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="checkout-total">Total: ${cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2)}</h3>
        </div>
        <div className="checkout-form-container">
          <form onSubmit={handleCheckout} className="checkout-form">
            <h2>Shipping Information</h2>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>ZIP Code:</label>
              <input type="text" required />
            </div>
            <button type="submit" className="checkout-button">Complete Purchase</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
