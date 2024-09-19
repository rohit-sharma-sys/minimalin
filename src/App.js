import React, { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Header from './header-footer/Header';
import Footer from './header-footer/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Shop from './Shop';
import SingleProducts from './Pages/SingleProducts';
import { CartProvider } from './Pages/CartContext'; 
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import PaymentPage from './Pages/PaymentPage';
import CategoriesPage from './CategoriesPage';
import SingleCategory from './SingleCategory';
import { SnackbarProvider } from 'notistack';
import Product from './Product';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [pathname]);  

  return null;  
}

function App() {
  return (
    <Router>
      <CartProvider> 
        <SnackbarProvider maxSnack={3}> 
          <div className="app">
            <Header />
            <ScrollToTop /> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="/product/:id" element={<SingleProducts />} />
              <Route path="CartPage" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/CategoriesPage" element={<CategoriesPage/>} />
              <Route path="/SingleCategory/:slug" element={<SingleCategory />} /> 
              <Route path="/Product" element={<Product />} /> 

            </Routes>
            <Footer />
          </div>
        </SnackbarProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
