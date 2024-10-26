import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeGoodsProducts: [],
  homeGoodsSearchTerm: '',
  homeGoodsfilteredData: [],
};

const homeGoodsProductSlice = createSlice({
  name: 'homeGoodsProducts',
  initialState: initialState,
  reducers: {
    setHomeGoodsProducts(state, action) {
      state.homeGoodsProducts = action.payload;
      state.homeGoodsfilteredData = action.payload; // Initialize filtered data on load
    },
    setHomeGoodsSearchTerm(state, action) {
      state.homeGoodsSearchTerm= action.payload;
      state.homeGoodsfilteredData = state.homeGoodsProducts.filter(product =>
        product.name.toLowerCase().includes(state.homeGoodsSearchTerm.toLowerCase())
      );
    },
  },
});

export const { setHomeGoodsProducts, setHomeGoodsSearchTerm } = homeGoodsProductSlice.actions;
export default homeGoodsProductSlice.reducer;
