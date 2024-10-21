import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm:"",
  filterData:[]
};

const ProductSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchTerm(state,action){
      state.searchTerm=action.payload
      state.filterData=state.products.filter(product=>product.name.toLowerCase().includes(state.searchTerm.toLocaleLowerCase()))
    }
  },
});

export const { setProducts,setSearchTerm } = ProductSlice.actions;
export default ProductSlice.reducer;
