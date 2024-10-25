import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../redux/CartSlice";
import ProductSlice from "../redux/ProductSlice";
import menProductSlice from "../redux/menProductSlice"; 
import womenProductSlice from "../redux/WomenProductSlice"
import kidsProductSlice from "../redux/KidsProductSlice"
import mobilesProductSlice from "../redux/MobilesProductSlice"
import laptopsProductSlice from "../redux/LaptopsProductSlice"
import homeGoodsProductSlice from "../redux/HomeGoodsProductSlice"
import bodyCareProductSlice from "../redux/BodyCareProductSlice"
import hairCareProductSlice from "../redux/HairCareProductSlice"
import deodrantsProductSlice from "../redux/DeodrantsProductSlice"



const store = configureStore({
    reducer: {
        cart: CartSlice,
        product: ProductSlice,
        menProducts: menProductSlice,
        womenProducts:womenProductSlice,
        kidsProducts:kidsProductSlice,
        mobilesProducts:mobilesProductSlice,
        laptopsProducts:laptopsProductSlice,
        homeGoodsProducts:homeGoodsProductSlice,
        bodyCareProducts:bodyCareProductSlice,
        hairCareProducts:hairCareProductSlice,
        deodrantsProducts:deodrantsProductSlice,
    },
});




export default store;

