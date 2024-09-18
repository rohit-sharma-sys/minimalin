import React, { useContext, useState } from 'react';
import { CartContext } from './Pages/CartContext';
import { Link } from 'react-router-dom';

function MiniCart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(true); // Control cart visibility

  // Function to close the mini cart
  const closeCart = () => {
    setIsCartOpen(false);
  };

  if (!isCartOpen) {
    return null; // If the cart is closed, don't render anything
  }

  return (
    <div className={`mini-cart ${isCartOpen ? 'open' : ''}`}>
      <h3>
        MiniCart
        {/* Close Icon */}
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
                <tr key={item.id}>
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
                  <td>
                    {/* <button
                      className="remove-icon"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.title}`}
                    >
                      <i className="fa-solid fa-x"></i>
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mini-cart-total">
            <p>
              Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </p>
            <div className="mini-cart-flex-button">
            <Link to="/Cartpage" className="view-cart-button checkout-button add-to-cart banner_button">View Cart</Link>
            <Link to="/checkout" className="checkout-button checkout-button add-to-cart banner_button">Checkout</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MiniCart;
