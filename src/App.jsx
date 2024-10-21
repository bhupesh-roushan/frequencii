import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import OrderConfirmation from "./pages/OrderConfirmation";
import FilterData from "./pages/FilterData";
import ProductDetail from "./pages/ProductDetail";
function App() {

  const [order,setOrder]=useState(null)
  return (

    <BrowserRouter>
   
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}>
        </Route>
        <Route path="/orderConfirmation" element={<OrderConfirmation order={order}/>}>
        </Route>

        <Route path="/filter-data" element={<FilterData/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
      <Footer />
     
    </BrowserRouter>
  );
}

export default App;
