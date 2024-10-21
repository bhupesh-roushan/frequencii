import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "../redux/CartSlice"
import ProductSlice from "../redux/ProductSlice"


const store = configureStore({
    reducer:{
        cart:CartSlice,
        product:ProductSlice,
    }
})

export default store

