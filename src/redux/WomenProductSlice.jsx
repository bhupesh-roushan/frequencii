import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  womenProducts: [],
  womenSearchTerm: '',
  womenfilteredData: [],
};

const womenProductSlice = createSlice({
  name: 'womenProducts',
  initialState: initialState,
  reducers: {
    setWomenProducts(state, action) {
      state.womenProducts = action.payload;
      state.womenfilteredData = action.payload; // Initialize filtered data on load
    },
    setWomenSearchTerm(state, action) {
      state.womenSearchTerm = action.payload;
      state.womenfilteredData = state.womenProducts.filter(product =>
        product.name.toLowerCase().includes(state.womenSearchTerm.toLowerCase())
      );
    },
  },
});

export const { setWomenProducts, setWomenSearchTerm } = womenProductSlice.actions;
export default womenProductSlice.reducer;