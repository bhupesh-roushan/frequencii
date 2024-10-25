import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HomeGoods from "./components/section cards/HomeGoods"
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
import Men from "./components/section cards/Men";
import Women from "./components/section cards/Women";
import MenProductDetails from "./ProductDetails/MenProductDetails";
import WomenProductDetails from "./ProductDetails/womenProductDetails";
import KidsProductDetails from "./ProductDetails/KidsProductDetails";
import Kids from "./components/section cards/Kids";
import Mobiles from "./components/section cards/Mobiles";
import MobilesProductDetails from "./ProductDetails/MobilesProductDetails";
import Laptops from "./components/section cards/Laptops";
import LaptopsProductDetails from "./ProductDetails/LaptopsProductDetails";
import HomeGoodsProductDetails from "./ProductDetails/HomeGoodsProductDetails";
import BodyCare from "./components/section cards/BodyCare";
import BodyCareProductDetails from "./ProductDetails/BodyCareProductDetails";
import HairCareProductDetails from "./ProductDetails/HairCareProductDetails";
import HairCare from "./components/section cards/HairCare";
import DeodrantsProductDetails from "./ProductDetails/DeodrantsProductDetails";
import Deodrants from "./components/section cards/Deodrants";


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
        <Route path="/filter-data" element={<FilterData />} />
        <Route path="/fashion/men" element={<Men />} />
        <Route path="/fashion/women" element={<Women />} />
        <Route path="/fashion/kids" element={<Kids />} />
        <Route path="/electronics/mobiles" element={<Mobiles />} />
        <Route path="/electronics/laptops" element={<Laptops />} />
        <Route path="/electronics/homeGoods" element={<HomeGoods />} />
        <Route path="/beauty/bodyCare" element={<BodyCare />} />
        <Route path="/beauty/hairCare" element={<HairCare />} />
        <Route path="/beauty/deodrants" element={<Deodrants />} />
        <Route path="/men/product/:id" element={<MenProductDetails />}></Route>
        <Route path="/women/product/:id" element={<WomenProductDetails/>}></Route>
        <Route path="/kids/product/:id" element={<KidsProductDetails/>}></Route>
        <Route path="/mobiles/product/:id" element={<MobilesProductDetails/>}></Route>
        <Route path="/laptops/product/:id" element={<LaptopsProductDetails/>}></Route>
        <Route path="/homeGoods/product/:id" element={<HomeGoodsProductDetails/>}></Route>
        <Route path="/bodyCare/product/:id" element={<BodyCareProductDetails/>}></Route>
        <Route path="/hairCare/product/:id" element={<HairCareProductDetails/>}></Route>
        <Route path="/deodrants/product/:id" element={<DeodrantsProductDetails/>}></Route>

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
