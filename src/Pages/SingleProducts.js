import React, { useState, useEffect, useContext  } from 'react';
import { useParams, Link, useNavigate  } from 'react-router-dom';
import { CartContext } from './CartContext'; // Import CartContext
import LOader from './LOader';
import 'react-medium-image-zoom/dist/styles.css';
import ReactImageMagnify from 'react-image-magnify';
import Zoom from 'react-medium-image-zoom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MiniCart from '../MiniCart';


function SingleProducts() {
   const { id } = useParams();
   const navigate = useNavigate(); 
   const { addToCart } = useContext(CartContext);
   const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [shippingPolicy, setShippingPolicy] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  

  useEffect(() => {
    // Fetch single product
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);

        fetch(`https://dummyjson.com/products?category=${data.category}&exclude=${id}`)
          .then((res) => res.json())
          .then((data) => {
            setRelatedProducts(data.products.slice(20, 24)); 
          })
          .catch((error) => console.error('Error fetching related products:', error));

        fetch('https://dummyjson.com/products')
          .then((res) => res.json())
          .then((data) => {
            setRecentlyViewed(data.products.slice(25, 29)); 
          })
          .catch((error) => console.error('Error fetching recently viewed products:', error));

        fetch(`https://dummyjson.com/products/${id}/reviews`)
          .then((res) => res.json())
          .then((data) => {
            setReviews(data.reviews); 
          })
          .catch((error) => console.error('Error fetching reviews:', error));

        setShippingPolicy("Your product will be delivered within 5-7 business days.");
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <LOader />;
  
  const handleAddToCart = () => {
    const quantity = parseInt(document.getElementById('quantity').value, 10) || 1;
    addToCart({ ...product, quantity });
    navigate('/Cartpage');
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };



  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p>{product.description}</p>;
      case 'reviews':
        return reviews.length > 0 ? (
          <div className="reviews">
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <h4>{review.user}</h4>
                <p>{review.comment}</p>
                <small>Rating: {review.rating}/5</small>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews available.</p>
        );
      case 'shippingPolicy':
        return <p>{shippingPolicy}</p>;
      default:
        return <p>{product.description}</p>;
    }
  };

  return (
    <div className="product-page-container container-with">
      <div className="product-main-section">
        <div className="product-image-gallery">
          <div className="main-product-image">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product.title,
                  isFluidWidth: true,
                  src: product.thumbnail,
                },
                largeImage: {
                  src: product.thumbnail,
                  width: 900,
                  height: 900,
                },
                enlargedImageContainerStyle: { zIndex: 9 },
                enlargedImagePosition: 'over',
              }}
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div className="thumbnail-images">
            {[...Array(6)].map((_, index) => (
              <Zoom key={index}>
                <img src={product.thumbnail} alt={`Thumbnail ${index + 1}`} />
              </Zoom>
            ))}
          </div>
        </div>

        <div className="product-info singlepage">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">$ {product.price}</p>
          <hr className="full-width-hr" />
          <p className="product-description">{product.description}</p>
          <hr className="full-width-hr" />
          <div className="eyeonproduct">
            <img src="/eye.webp" alt="" />
            <span><b>15</b> people are viewing this right now.</span>
          </div>
          <hr className="full-width-hr" />
          <div className='product_extra_details'>
            <p><b>Availability: </b>{product.stock} In Stock</p>
            <p><strong>Type:</strong> {product.category}</p>
            <p><b>Brand:</b> {product.brand}</p>
            <p><b>warranty: </b>{product.warrantyInformation}</p>
          </div>
          <hr className="full-width-hr" />
          <div className="purchase-options">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <input
               id="quantity"
               type="number"
               min="1"
               max={product.stock}
               value={quantity}
               onChange={handleQuantityChange}
             />
            </div>
            <div className="action-buttons">
            <button className="add-to-cart banner_button" onClick={handleAddToCart}>
                <span><i className='fa-solid fa-cart-shopping'></i></span>Add to Cart
              </button>
              <button className="buy-now banner_button">Buy Now</button>
            </div>
          </div>
          <div className="wishilist">
            <ul>
              <li><span><i className='far fa-heart'></i> Add to wishlist</span></li>
              <li><span><i className='fas fa-exchange-alt'></i> Compare</span></li>
              <li><span><i className='far fa-envelope'></i> Ask a Question</span></li>
              <li><span><i className='far fa-chart-bar'></i> Size Chart</span></li>
            </ul>
          </div>
          <hr className="full-width-hr" />
          <div className="estimate-time">
            <img src="/fast-delivery.webp" alt="" />
            <p> Estimated Delivery Date : <span><b>{product.shippingInformation}</b></span></p>
          </div>
          <hr className="full-width-hr" />
          <div className="social-icons">
            <ul>
              <li>Share:</li>
              <li><i className='fab fa-facebook-f'></i>Facebook</li>
              <li><i className='fab fa-twitter'></i>Twitter</li>
              <li><i className='fab fa-pinterest'></i>Pinterest</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs for Description, Reviews, Shipping Policy */}
      <div className="tab-section">
        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
          <button className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
          <button className={`tab-btn ${activeTab === 'shippingPolicy' ? 'active' : ''}`} onClick={() => setActiveTab('shippingPolicy')}>Shipping Policy</button>
        </div>
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products ">
      <h1 className="bft-collection">Related Products<span className="dots">.</span></h1>
        <div className="related-product-grid">
          {relatedProducts.map((relatedProduct) => (
            <Link target='_top' to={`/product/${relatedProduct.id}`} className="related-product product-card-link cat-col coll-col" key={relatedProduct.id}>
            <div className="related-product " key={relatedProduct.id}>
              <img src={relatedProduct.thumbnail} alt="Related Product" />
              <p className="related-product-title cat-title">{relatedProduct.title}</p>
              <p className="related-product-price cat-title cat-price">$ {relatedProduct.price}</p>
              <div className="featured-icon-div">
              <ul className="collection-icons">
                <li><i className="far fa-eye"></i></li>
                <li><i className="fas fa-shopping-cart"></i></li>
                <li><i className="fas fa-heart"></i></li>
                <li><i className="fas fa-exchange-alt"></i></li>
              </ul>
            </div>  
            </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recently Viewed */}
      
      <div className="recently-viewed-products">
        <h1 className="bft-collection">Recently Viewed<span className="dots">.</span></h1>
        <div className="recently-viewed-grid">
          {recentlyViewed.map((viewedProduct) => (
          <Link target='_top' to={`/product/${viewedProduct.id}`} className="recently-viewed-item product-card-link cat-col coll-col" key={viewedProduct.id}>
            <div className="recently-viewed-item" key={viewedProduct.id}>
              <img src={viewedProduct.thumbnail} alt="Recently Viewed" />
              <p className="recently-viewed-title cat-title">{viewedProduct.title}</p>
              <p className="recently-viewed-price cat-title cat-price">$ {viewedProduct.price}</p>
              <div className="featured-icon-div">
              <ul className="collection-icons">
                <li><i className="far fa-eye"></i></li>
                <li><i className="fas fa-shopping-cart"></i></li>
                <li><i className="fas fa-heart"></i></li>
                <li><i className="fas fa-exchange-alt"></i></li>
              </ul>
            </div> 
            </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>FAQs</h2>
        <div className="featdsured-ds-div">
              <ul className="collecsdtion-icdsons">
                <li><i className="far fa-eye"></i></li>
                <li><i className="fas fa-shopping-cart"></i></li>
                <li><i className="fas fa-heart"></i></li>
                <li><i className="fas fa-exchange-alt"></i></li>
              </ul>
            </div> 
        <div className="faq-item">
          <h3>How to buy a product?</h3>
          <p>Instructions on buying the product</p>
        </div>
        <div className="faq-item">
          <h3>How can I make a refund?</h3>
          <p>Refund instructions</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProducts;
