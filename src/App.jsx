import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppImport from "./AppImport";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState(null);
  return (
    <BrowserRouter>
      <AppImport.Navbar />
      <Routes>
        <Route path="/about" element={<AppImport.AboutPage />} />
        <Route path="/" element={<AppImport.Home />} />
        <Route path="/cart" element={<AppImport.Cart />} />
        <Route
          path="/checkout"
          element={<AppImport.Checkout setOrder={setOrder} />}
        />
        <Route
          path="/orderConfirmation"
          element={<AppImport.OrderConfirmation order={order} />}
        />
        <Route path="/filter-data" element={<AppImport.FilterData />} />
        <Route
          path="bodyCare/product/:id"
          element={<AppImport.ProductDetail />}
        />
        <Route
          path="topProducts/product/:id"
          element={<AppImport.ProductDetail />}
        />
        <Route path="kids/product/:id" element={<AppImport.ProductDetail />} />
        <Route
          path="topProducts/product/:id"
          element={<AppImport.ProductDetail />}
        />
        <Route path="men/product/:id" element={<AppImport.ProductDetail />} />
        <Route path="women/product/:id" element={<AppImport.ProductDetail />} />
        <Route
          path="homeGoods/product/:id"
          element={<AppImport.ProductDetail />}
        />
        <Route
          path="mobiles/product/:id"
          element={<AppImport.ProductDetail />}
        />
        <Route
          path="laptops/product/:id"
          element={<AppImport.ProductDetail />}
        />
        <Route
          path="hairCare/product/:id"
          element={<AppImport.ProductDetail />}
        />
        <Route
          path="deodrants/product/:id"
          element={<AppImport.ProductDetail />}
        />
        <Route path="/contact" element={<AppImport.ContactPage />} />
        <Route path="/help" element={<AppImport.HelpPage />} />
        <Route path="/advertise" element={<AppImport.AdvertisePage />} />
        <Route path="/sales" element={<AppImport.SalesPage />} />
        <Route path="/fashion/men" element={<AppImport.Men />} />
        <Route path="/fashion/women" element={<AppImport.Women />} />
        <Route path="/fashion/kids" element={<AppImport.Kids />} />
        <Route path="/electronics/mobiles" element={<AppImport.Mobiles />} />
        <Route path="/electronics/laptops" element={<AppImport.Laptops />} />
        <Route
          path="/electronics/homeGoods"
          element={<AppImport.HomeGoods />}
        />
        <Route path="/beauty/bodyCare" element={<AppImport.BodyCare />} />
        <Route path="/beauty/hairCare" element={<AppImport.HairCare />} />
        <Route path="/beauty/deodrants" element={<AppImport.Deodrants />} />
      </Routes>
      <AppImport.Footer />
    </BrowserRouter>
  );
}

export default App;
