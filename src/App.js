import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import NavbarItems from "./Components/NavbarItems/NavbarItems";
import HomePage from "./Pages/HomePage/HomePage";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <NavbarItems />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
