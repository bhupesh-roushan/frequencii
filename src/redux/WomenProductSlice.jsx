import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  womenProducts: [],
  searchTerm: '',
  filteredData: [],
};

const WomenProductSlice = createSlice({
  name: 'womenProducts',
  initialState: initialState,
  reducers: {
    setWomenProducts(state, action) {
      state.womenProducts = action.payload;
    },
    setWomenSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.womenProducts.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setWomenProducts, setWomenSearchTerm } = WomenProductSlice.actions;
export default WomenProductSlice.reducer;
