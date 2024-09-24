import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { CartContext } from "./Pages/CartContext";
import LOader from './Pages/LOader'; // Assuming LOader is the loader component

function Product() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    enqueueSnackbar(`${product.title} added to cart!`, { variant: 'success' });
  };

  const handleShowPopup = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return <LOader />; // Show the loader while products are being fetched
  }

  return (
    <>
      <h1 className="bft-collection-products">Our Products<span className="dots">.</span></h1>
      <div className="container container-with">
        <div className="related-product-grid-productpage">
          {products.map(product => (
            <div className="related-product-product-card-link-cat-col coll-col-productpage related-product product-card-link cat-col coll-col" key={product.id}>
              <div className="slide-bft-items">
                <span className="menu-item-badge">{product.sale}</span>
                <Link to={`/product/${product.id}`} className="">
                  <img src={product.thumbnail} className="Collection-img" alt={product.title} style={{ width: '100%', height: 'auto' }} />
                  <div className='product-details'>
                    <p className="related-product-title cat-title">{product.title}</p>
                    <p className="cat-stock">{product.availabilityStatus}</p>
                    <p className="related-product-price cat-title cat-price">$ {product.price}</p>
                  </div>
                </Link>
                <div className="featured-icon-div">
                  <ul className="collection-icons">
                    <li onClick={() => handleShowPopup(product)}>
                      <i className="far fa-eye"></i>
                    </li>
                    <li onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}>
                      <button
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        <i className="fas fa-shopping-cart"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {popupVisible && selectedProduct && (
            <div className="popup-overlay">
              <div className="popup-content">
                <span className="popup-close" onClick={handleClosePopup}>&times;</span>
                <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className="popup-image" />
                <h2>{selectedProduct.title}</h2>
                <p>{selectedProduct.description}</p>
                <div className='product_extra_details'>
                  <p><b>Price: </b>${selectedProduct.price}</p>
                  <p><strong>Type:</strong> {selectedProduct.category}</p>
                  <p><b>Warranty: </b>{selectedProduct.warrantyInformation}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
