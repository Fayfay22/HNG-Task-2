import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"; 
import Cart from "./components/pages/Cart"; 
import Checkout from "./components/pages/Checkout"; 
// import AdminHome from "./admin/AdminHome";

 
 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        {/* <Route path="admin" element={<AdminHome />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);