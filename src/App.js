import './App.css';
import "../src/all.min.css";


import {  Route, Routes } from "react-router-dom";




import Home from "./Pages/Home/Home"


import Contact from './Pages/Contact/Contact';
import Checkout from './Pages/Checkout/Checkout';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Cart from './Pages/Cart/Cart';
import Favorites from './Pages/Favorites/Favorites';
import Account from './Pages/Auth/Account';
import Login from './Pages/Auth/Login';
import About from './Pages/About/About';
import Offers from './Pages/Offers/Offers';
import Shop from './Pages/Shopping/Shop';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Nested routes for products */}
        <Route path="/products" element={<Shop />}>
        </Route>
        <Route path='/offer' element={<Offers/>} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>


    </div>
  );
}

export default App;
