import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import FeaturedCollectionSlider from "../FeaturedCollectionSlider";
import NewCollection from "../NewCollection";
import CatComponent from "../CatComponent";
import { Link } from "react-router-dom";
import { blogs } from "../blogData";

const Home = () => {

  return (
    <>
    <div className="home_banner_main">
      <AwesomeSlider
        animation="fadeAnimation"
        organicArrows={true}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000} // auto-play interval in milliseconds
      >
        <div data-src="/electronics-slideshow_1_1920x.webp">
          <div className="overlay-text">
            <h4 className="color_blue">AirPods Collection</h4>
            <h1 className="color_black">Bluetooth Earphone</h1>
            <p className="para_color">Bluetooth earphones are wireless headphones that use Bluetooth technology to connect to devices.</p>
            <button className="banner_button"><Link to="/shop">Shop Now</Link></button>
            </div>
        </div>
        <div data-src="electronics-slideshow_9_1920x.webp">
        <div className="overlay-text-right">
            <h4 className="color_blue">New Collection</h4>
            <h1 className="color_black">Bluetooth Speaker</h1>
            <p className="para_color">Bluetooth speakers are wireless audio devices that use Bluetooth technology to connect to various devices.</p>
            <button className="banner_button"><Link to="/shop">Shop Now</Link></button>
          </div>
        </div>
        <div data-src="electronics-slideshow_5_1920x.webp">
        <div className="overlay-text">
            <h4 className="color_blue">Best Selling</h4>
            <h1 className="color_black">Tablet with Pen</h1>
            <p className="para_color">Making them suitable for tasks such as note-taking, drawing, and graphic design.</p>
            <button className="banner_button"><Link to="/shop">Shop Now</Link></button>
          </div>
        </div>
      </AwesomeSlider>
      </div>
      <div className="container container-with">
      <CatComponent/>

        <div className="categories-row">
          <div className="cat-col-1">
            <img src="first.webp" alt="" className="featured-image" />
            <p className="cat-title">Headphone</p>
          </div>
          <div className="cat-col-2">
            <img src="second.webp" alt="" className="featured-image" />
            <p className="cat-title">Earphone</p>
          </div>
          <div className="cat-col-3">
            <img src="third.webp" alt="" className="featured-image" />
            <p className="cat-title">Smartphone</p>
          </div>
          <div className="cat-col-4">
            <img src="fourth.webp" alt="" className="featured-image" />
            <p className="cat-title">Smartwatch</p>
          </div>
        </div>
      </div>

      <div className="featured-slider">
      <FeaturedCollectionSlider />
    </div>
<div className="container container-with">
  <div className="row-flex">
    <div className="col">
      <div className="col-img">
      <img src="one.webp" alt="" className="zoomin_image" />
      </div>
    </div>
    <div className="col">
    <div className="col-img">
    <img src="two.webp" alt="" className="zoomin_image" />
</div>
    </div>
    <div className="col">
    <div className="col-img">
    <img src="three.webp" alt="" className="zoomin_image" />
</div>
    </div>
  </div>
</div>
<div className="excontiner">
  <div className="container-with">
  <div className="row-flex Exclusive Collection">
<div className="col-1 Exclusive Collection">
<div className="about_us_info">
  <h3>Exclusive Collectionspan </h3>
  <h2>3D Video Game Controller<span className="dots">.</span></h2>
  <p>When referring to a "3D video game controller," it's important to note that most modern video game controllers are designed to operate in three dimensions, allowing users to navigate characters and objects within a 3D virtual space.</p>
  <p>When referring to a "3D video game controller," it's important to note that most modern video game controllers are designed to operate in three dimensions, allowing users to navigate characters and objects within a 3D virtual space.</p>
  <button className="banner_button"><Link to="/shop">Shop Now</Link></button>

</div>
</div>
<div className="col-2 Exclusive Collection">
<div className="eclusiv_img">
  <img src="excluve-img.webp" alt="" />
</div>
</div>
</div>
  </div>
</div>
<div className="featured-slider New collection">
      <NewCollection />
    </div>
    <div className="container container-with">
    <h1 className="bft-collection blog_title">Latest Blog<span className="dots">.</span></h1>

        <div className="categories-row blog">
          
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.imageUrl} alt={blog.title} />
            <div className="blog-details">
              <Link to={`/blog/${blog.id}`}><h2>{blog.title}</h2></Link>
              <div className="blog-meta">
                <span>{blog.date}</span>
                <span>{blog.comments} comments</span>
              </div>
              <p>{blog.description}</p>
              <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </>
  );
};
export default Home;