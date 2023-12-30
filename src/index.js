import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import Products from './Products';
import Blog from './Blog';
import Contact from './Contact'
import Login from './Login';
import Register from './Register'
import Cart from './Cart';
import Payment from './Payment';
import Checkout from './Checkout'
import Nopage from './Nopage';
import Success from './Success';
import Productdetails from './Productdetails'

export default function Abc() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Products" element={<Products />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
          
          <Route path="Register" element={<Register />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="Success" element={<Success />} />
          <Route path="Productdetails" element={<Productdetails />} />
          <Route path="*" element={<Nopage />} />
        </Route>
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Abc />);


// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
