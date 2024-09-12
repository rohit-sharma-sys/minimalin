import './App.css';
import Home from './Pages/Home';
import Header from './header-footer/Header';
import Footer from './header-footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './Shop';
import SingleProducts from './Pages/SingleProducts';
import { CartProvider } from './Pages/CartContext'; // Import CartProvider
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import PaymentPage from './Pages/PaymentPage';
import TestComponent from './TestComponent';
import CategoriesPage from './CategoriesPage';
import SingleCategory from './SingleCategory';

function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap the app with CartProvider */}
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="/product/:id" element={<SingleProducts />} />
            <Route path="CartPage" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/TestComponent" element={<TestComponent/>} />
            <Route path="/CategoriesPage" element={<CategoriesPage/>} />
            <Route path="/SingleCategory/:slug" element={<SingleCategory />} /> 

          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
