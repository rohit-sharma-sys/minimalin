import React from 'react'

function Footer() {
  return (
    <div className="footer-main">
    <div className="container-with">
      <div className="footer-row-1">
      <div className="col-1 col_flex">
        <div>
          <img src="4-track.png" alt="" />
        </div>
        <div>
          <h4>Free Shipping</h4>
          <p>On orders over <b>$99.</b></p>
        </div>
      </div>
      <div className="col-2 col_flex">
        <div>
          <img src="2-money.png" alt="" />
        </div>
        <div>
          <h4>Money Back
          </h4>
          <p>Money back in 15 days.</p>
        </div>
      </div>
      <div className="col-3 col_flex">
        <div>
          <img src="3-credit-card.png" alt="" />
        </div>
        <div>
          <h4>Secure Checkout</h4>
          <p>100% Payment Secure.</p>
        </div>
      </div>
      <div className="col-4 col_flex">
        <div>
          <img src="4-support.png" alt="" />
        </div>
        <div>
          <h4>Online Support          </h4>
          <p>Ensure product quality</p>
        </div>
      </div>
      </div>
      <div className="footer-row-2">
      <div className="bft-col-1">
        <h4 className="footer-title">About Us.</h4>
        <p className="footer-des">
        Minimal E-Commerce is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide.
        </p>
        <div className="social-icons">
        <ul>
        <li><i class="fab fa-facebook-f"></i></li>     
        <li><i class="fab fa-twitter"></i></li>       
        <li><i class="fab fa-youtube"></i></li>       
        <li><i class="fab fa-instagram"></i></li>       
        <li><i class="fab fa-tiktok"></i></li>       
        </ul>
        </div>
      </div>

      <div className="bft-col-2">
        <h4 className="footer-title">Quick Link</h4>
        <ul className="footerlinks">
          <li>My Account</li>
          <li>My Cart</li>
          <li>Wishlist</li>
          <li>Gift Card</li>
          <li>Need Help?</li>
        </ul>
      </div>

      <div className="bft-col-3">
        <h4 className="footer-title">Information</h4>
        <ul className="footerlinks">
          <li>My Account</li>
          <li>My Cart</li>
          <li>Wishlist</li>
          <li>Gift Card</li>
          <li>Need Help?</li>
        </ul>
      </div>

      <div className="bft-col-4">
        <h4 className="footer-title">Newsletter</h4>
        <p className="footer-des">
        Learn about our most recent news, updates, and deals by subscribing.
        </p>
        <div className="footer_form">
        <form action="">
          <input type="email" name="email" id="email" placeholder="example@gmail.com"/>
          <input type="submit" value="Subscribe" />
        </form>
        </div>
      </div>
      </div>
    </div>
    <div className="copyright">
    <div className="bft-row-3 container-with">
        <div className="row-3-col-1">
          <p><b>© Minimalin.</b> All rights reserved.</p>
        </div>
        <div className="row-3-col-2">
        <div className="social-icons">
        <ul>
        <li>Privacy Policy</li>     
        <li>Refund Policy</li>       
        <li>Shipping Policy</li>       
        <li>Terms of Service</li>       
        </ul>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer