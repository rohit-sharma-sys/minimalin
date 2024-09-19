import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../Pages/CartContext';
import MiniCart from '../MiniCart';
function Header() {
  const [isMiniCartOpen, setMiniCartOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [isNavbarOpen, setNavbarOpen] = useState(false); 


  const toggleMiniCart = () => {
    setMiniCartOpen(prevState => !prevState);
  };
  const toggleNavbar = () => {
    setNavbarOpen(prevState => !prevState);
  };


  return (
    <div className="container-header">
      <div className="container">
      <div className="bft-row_top_bar">
      <div className="topbar">
      <div className="slider">
        <ul className="top_ul">
          <li className="top_bar_items">Returns accepted for 30 days</li>
          <li className="top_bar_items">Free return shipping</li>
          <li className="top_bar_items">No final sale items</li>
          <li className="top_bar_items">No restocking fee</li>
          <li className="top_bar_items">100% Payment Secure</li>
          <li className="top_bar_items">No restocking fee</li>
        </ul>
        <ul className="top_ul">
          <li className="top_bar_items">Returns accepted for 30 days</li>
          <li className="top_bar_items">Free return shipping</li>
          <li className="top_bar_items">No final sale items</li>
          <li className="top_bar_items">No restocking fee</li>
          <li className="top_bar_items">100% Payment Secure</li>
          <li className="top_bar_items">No restocking fee</li>
        </ul>
      </div>
    </div>
      </div>
      <div className="header_row container-with">
        <div className="col-1">
          <Link to="/">
          <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/logo-simple-10_150x.png?v=1708142290" alt="" className="logo" />
          </Link>
        </div>
        <div className="col-2">
        <ul className={`navbar ${isNavbarOpen ? 'active' : ''}`}>
          <li className="nav-logo">
          <Link to="/">
          <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/logo-simple-10_150x.png?v=1708142290" alt="" className="logo" />
          </Link>
          </li>
        <li className="nav-items"><Link to="/">Home</Link></li>
            <li className="nav-items"><Link to="/shop">Shop</Link>
            <i class="fa-solid fa-chevron-down"></i>
              <span className="banner">New</span>
            </li>
            <li className="nav-items cat-main"><Link to="/CategoriesPage">Categories</Link><i class="fa-solid fa-chevron-down">
            </i>
            <span className="banners">Hot</span>
            {/* <div className="cat-menu">
                <div className="cat-row">
                  <div className="cat-menu-col-1">
                    <h4 className="cat-title">
                    Featured Product
                    </h4>
                    <hr className='cat-hr'/>
                    <img className='cat-image' src="cat-1.webp" alt="" />
                  </div>
                  <div className="cat-menu-col-2">
                    <h4 className="cat-title">
                    New Arrivals
                    </h4>
                    <hr className='cat-hr' />
                    <img className='cat-image' src="cat-2.webp" alt="" />
                  </div>
                  <div className="cat-menu-col-3">
                    <h4 className="cat-title">
                     Summer Styles
                    </h4>
                    <hr className='cat-hr'/>
                    <img className='cat-image' src="cat-3.webp" alt="" />
                  </div>
                  <div className="cat-menu-col-4">
                    <h4 className="cat-title">
                     Winter Fashion
                    </h4>
                    <hr className='cat-hr'/>
                    <img className='cat-image' src="cat-4.webp" alt="" />
                  </div>
                </div>

                <div className="cat-row">
    <div className="cat-menu-col-1">
      <h4 className="cat-title">
      Accessories
      </h4>
      <hr className='cat-hr'/>
      <img className='cat-image' src="cat-row2-img-1.webp" alt="" />
    </div>
    <div className="cat-menu-col-2">
      <h4 className="cat-title">
      Footwear
      </h4>
      <hr className='cat-hr' />
      <img className='cat-image' src="cat-row2-img-2.webp" alt="" />
    </div>
    <div className="cat-menu-col-3">
      <h4 className="cat-title">
        Men
      </h4>
      <hr className='cat-hr'/>
      <img className='cat-image' src="cat-row2-img-3.webp" alt="" />
    </div>
    <div className="cat-menu-col-4">
      <h4 className="cat-title">
       Women 
      </h4>
      <hr className='cat-hr'/>
      <img className='cat-image' src="cat-row2-img-4.webp" alt="" />
    </div>
  </div>
              </div> */}
            </li>
            <li className="nav-items"><Link to="/Product">Product</Link></li>
            <li className="nav-items">Blog</li>
            <li className="nav-items">Pages</li>
          </ul>
          <i className={`fa ${isNavbarOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" onClick={toggleNavbar}></i>


        </div>
        <div className="col-3">
        <div className="dropdown-menu">
        <span className='dropdoen-inr'>IN (INR ₹)<i class="fa-solid fa-chevron-down"></i></span>

          <ul className='dropdown-ul'>
          <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AF">
                                Afghanistan (AFN ؋)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AX">
                                Åland Islands (EUR €)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AL">
                                Albania (ALL L)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="DZ">
                                Algeria (DZD د.ج)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AD">
                                Andorra (EUR €)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AO">
                                Angola (USD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AI">
                                Anguilla (XCD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AG">
                                Antigua &amp; Barbuda (XCD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AR">
                                Argentina (USD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AM">
                                Armenia (AMD դր.)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AW">
                                Aruba (AWG ƒ)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AC">
                                Ascension Island (SHP £)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AU">
                                Australia (AUD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AT">
                                Austria (EUR €)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="AZ">
                                Azerbaijan (AZN ₼)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BS">
                                Bahamas (BSD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BH">
                                Bahrain (USD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BD">
                                Bangladesh (BDT ৳)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BB">
                                Barbados (BBD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BY">
                                Belarus (USD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BE">
                                Belgium (EUR €)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BZ">
                                Belize (BZD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BJ">
                                Benin (XOF Fr)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BM">
                                Bermuda (USD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BT">
                                Bhutan (USD $)
                              </a>
                            </li>
                          
                            <li class="disclosure__item" tabindex="-1">
                              <a href="#" data-value="BO">
                                Bolivia (BOB Bs.)
                              </a>
                            </li>
          </ul>
        </div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-user"></i>
        <div className="cart-icon  cart-item-count" onClick={toggleMiniCart}>
        <i class="fa-solid fa-cart-plus"></i>
                      <span className="cart-item-count">{cartItems.length}</span>
            </div>

            {isMiniCartOpen && <MiniCart onClose={toggleMiniCart} />}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header