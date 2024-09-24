import React, { useContext, useState, useEffect, useRef } from 'react';
import { CartContext } from './Pages/CartContext';
import { Link, useNavigate } from 'react-router-dom';

function MiniCart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(true); // Control cart visibility
  const miniCartRef = useRef(null); // Reference for the mini cart
  const navigate = useNavigate(); // Hook for programmatic navigation

  const closeCart = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (miniCartRef.current && !miniCartRef.current.contains(event.target)) {
        closeCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isCartOpen) {
    return null; 
  }

  const handleNavigate = (path) => {
    closeCart(); 
    navigate(path); 
  };

  return (
    <div ref={miniCartRef} className={`mini-cart ${isCartOpen ? 'open' : ''}`}>
      <h3>
        MiniCart
        
        <span onClick={closeCart} style={{ cursor: 'pointer', float: 'right' }}>
          <i className="fa-solid fa-x"></i>
        </span>
      </h3>
      <hr className="blue" />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="mini-cart-table">
            <tbody>
              {cartItems.map(item => (
                <tr>
                  <td>
                    <div className="mini-cart-image-container">
                      <img src={item.thumbnail} alt={item.title} className="mini-cart-image" />
                      <button
                        className="remove-icon"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.title}`}
                      >
                        <i className="fa-solid fa-x"></i>
                      </button>
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mini-cart-total">
            <p>
              Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </p>
            <div className="mini-cart-flex-button">
              <button 
                className="view-cart-button checkout-button add-to-cart banner_button" 
                onClick={() => handleNavigate('/Cartpage')}
              >
                View Cart
              </button>
              <button 
                className="checkout-button checkout-button add-to-cart banner_button" 
                onClick={() => handleNavigate('/checkout')}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MiniCart;
