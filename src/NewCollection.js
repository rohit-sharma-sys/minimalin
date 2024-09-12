import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function NewCollection() {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,   
        autoplaySpeed: 2000,  
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
    
      const products = [
        {
          id: 1,
          img: "new-col-1.webp",
          imgHover: "new-col-1-hover.webp",
          title: "Qb. 3D Virtual Reality (VR) Box Gaming Headset",
          price: "<del>Rs. 5,200.00</del> Rs. 3,400.00",
          sale:"80%"
        },
        {
          id: 2,
          img: "new-col-2.png",
          imgHover: "new-col-2-hover.webp",
          title: "Ea. V92 Ultra Pro Max",
          price: "<del>Rs. 11,100.00</del> Rs. 9,400.00",
          sale:"New"

        },
        {
          id: 3,
          img: "new-col-3.webp",
          imgHover: "new-col-3-hover.webp",
          title: "Xb. Realistic Fitness Trackers",
          price: "Rs. 11,100.00",
          sale:"-36%"
        },
        {
          id: 4,
          img: "new-col-4.webp",
          imgHover: "new-col-4-hover.webp",
          title: "La. Apple Watch Ultra",
          price: "<del>Rs. 11,100.00</del> Rs. 9,400.00",
          sale:"-26%"

        },
        {
          id: 5,
          img: "new-col-5.webp",
          imgHover: "new-col-5-hover.webp",
          title: "F. Ultimate Smart Watch",
          price: "<del>Rs. Rs. 6,400.00</del> Rs. 4,700.00",
          sale:"12%"
        } 
    ];
  return (
    <div className="container container-with">
    <h1 className="bft-collection">New Collection<span className="dots">.</span></h1>
    <Slider {...settings}>
      {products.map(product => (
        <div className="cat-col coll-col" key={product.id}>
          <div className="newcollectiom-margin">
          <span class="menu-item-badge">{product.sale}</span>
          <img src={product.img} alt="" className="featured-image Collection-img" />
          <img src={product.imgHover} alt="" className="featured-image Collection-img-hover" />
          <div className='product-details'>
          <p className="cat-title">{product.title}</p>
          <p className="cat-title cat-price" dangerouslySetInnerHTML={{ __html: product.price }}></p>
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
      ))}
    </Slider>
<div className="viewall">
<button className="banner_button"><Link to="/shop">View All</Link></button>
</div>    
</div>
  )
}

export default NewCollection