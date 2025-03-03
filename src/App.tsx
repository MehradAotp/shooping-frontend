import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/home/home";
import CartPage from "./pages/cartPage/CartPage";
import ProductsPage from "./pages/products/Products";
import LoginPage from "./pages/login/loginPage";
import SignupPage from "./pages/signup/signupPage";

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;
