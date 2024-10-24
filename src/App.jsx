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
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import AdvertisePage from "./pages/AdvertisePage";
import SalesPage from "./pages/SalesPage";
import Men from "./categoryPages/Men";
import Women from "./categoryPages/Women";
import Kids from "./categoryPages/Kids";
import Bodycare from "./categoryPages/Bodycare";
import HairCare from "./categoryPages/HairCare";
import Deodrants from "./categoryPages/Deodrants";
import Mobiles from "./categoryPages/Mobiles";
import Laptops from "./categoryPages/Laptops";
import HomeGoods from "./categoryPages/HomeGoods";
function App() {
  const [order, setOrder] = useState(null);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/checkout"
          element={<Checkout setOrder={setOrder} />}
        ></Route>
        <Route
          path="/orderConfirmation"
          element={<OrderConfirmation order={order} />}
        ></Route>
        <Route path="/filter-data" element={<FilterData />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/help" element={<HelpPage />}></Route>
        <Route path="/advertise" element={<AdvertisePage />}></Route>
        <Route path="/sales" element={<SalesPage />}></Route>
        <Route path="/" element={<Home />} />
        
        <Route path="/fashion/men" element={<Men />} />
        <Route path="/fashion/women" element={<Women />} />
        <Route path="/fashion/kids" element={<Kids />} />

        <Route path="/electronics/mobiles" element={<Mobiles />} />
        <Route path="/electronics/laptops" element={<Laptops />} />
        <Route path="/electronics/home-goods" element={<HomeGoods />} />

        <Route path="/beauty/bodycare" element={<Bodycare />} />
        <Route path="/beauty/haircare" element={<HairCare />} />
        <Route path="/beauty/deodrants" element={<Deodrants />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
