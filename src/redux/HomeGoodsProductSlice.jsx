import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeGoodsProducts: [],
  searchTerm: '',
  filteredData: [],
};

const homeGoodsProductSlice = createSlice({
  name: 'homeGoodsProducts',
  initialState: initialState,
  reducers: {
    setHomeGoodsProducts(state, action) {
      state.homeGoodsProducts = action.payload;
    },
    setHomeGoodsSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.homeGoodsProducts.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setHomeGoodsProducts, setHomeGoodsSearchTerm } = homeGoodsProductSlice.actions;
export default homeGoodsProductSlice.reducer;
