import React, { useState, useEffect, useContext } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { CartContext } from "./Pages/CartContext";

const FeaturedCollectionSlider = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,   
    autoplaySpeed: 2000,    
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 465, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => console.error('Error fetching products:', error));
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

  return (
    <div className="container container-with">
      <h1 className="bft-collection">Featured Collection<span className="dots">.</span></h1>
      <Slider {...settings}>
        {products.map(product => (
          <div className="cat-col coll-col" key={product.id}>
            <div className="slide-bft-items">
              <span className="menu-item-badge">{product.sale}</span>
              <Link to={`/product/${product.id}`} className="product-card-link">
                <img src={product.thumbnail} className="Collection-img" alt={product.title} style={{ width: '100%', height: 'auto' }} />
                <div className='product-details'>
                  <p className="cat-title">{product.title}</p>
                  <p className="cat-stock">{product.availabilityStatus}</p>
                  <p className="cat-title cat-price">$ {product.price}</p>
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
      </Slider>
      <div className="viewall">
        <button className="banner_button"><Link to="/shop">View All</Link></button>
      </div>
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
              <p><b>warranty: </b>{selectedProduct.warrantyInformation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedCollectionSlider;
