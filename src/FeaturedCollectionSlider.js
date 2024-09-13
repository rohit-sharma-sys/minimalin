import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import TestComponent from "./TestComponent";


const FeaturedCollectionSlider = () => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,   
    autoplaySpeed: 2000,    
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1200, // Below 1200px screen width
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 992, // Below 992px screen width
        settings: {
          slidesToShow: 3, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // Below 768px screen width
        settings: {
          slidesToShow: 2, // Show 1 slide
        },
      },
      {
        breakpoint: 465, // Below 768px screen width
        settings: {
          slidesToShow: 1, // Show 1 slide
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
          console.log(products);
        })
        .catch(error => console.error('Error fetching products:', error));
    }, []); 

  return (
    <div className="container container-with">
      <h1 className="bft-collection">Featured Collection<span className="dots">.</span></h1>
      <h1>Testing Of Git Branch</h1>
      <Slider {...settings}>
        {products.map(product => (

<Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
          <div className="cat-col coll-col" key={product.id}>
            <div className="slide-bft-items">            <span class="menu-item-badge">{product.sale}</span>
            {/* <span class="mensdu-dsdsd-badsddge">{product.id}</span> */}

            <img src={product.thumbnail} className="Collection-img" alt={product.title} style={{ width: '100%', height: 'auto' }} />
            <div className='product-details'>
            <p className="cat-title">{product.title}</p>
            <p className="cat-stock">{product.availabilityStatus}</p>
            {/* <p className="cat-discount">{product.discountPercentage}%</p> */}

            <p className="cat-title cat-price">$ {product.price}</p>
            </div>
            <div className="featured-icon-div">
              <ul className="collection-icons">
                <li><i className="far fa-eye"></i></li>
                <li><i className="fas fa-shopping-cart"></i></li>
                <li><i className="fas fa-heart"></i></li>
                <li><i className="fas fa-exchange-alt"></i></li>
              </ul>
            </div>
            </div>

          </div>
          </Link>
        ))}
      </Slider>
<div className="viewall">
<button className="banner_button"><Link to="/shop">View All</Link></button>
</div>    
</div>
  );
};

export default FeaturedCollectionSlider;