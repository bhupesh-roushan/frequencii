import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  laptopsProducts: [],
  laptopsSearchTerm: '',
  laptopsfilteredData: [],
};

const laptopsProductSlice = createSlice({
  name: 'laptopsProducts',
  initialState: initialState,
  reducers: {
    setLaptopsProducts(state, action) {
      state.laptopsProducts = action.payload;
      state.laptopsfilteredData = action.payload;
    },
    setLaptopsSearchTerm(state, action) {
      state.laptopsSearchTerm = action.payload;
      state.laptopsfilteredData = state.laptopsProducts.filter(product =>
        product.name.toLowerCase().includes(state.laptopsSearchTerm.toLowerCase())
      );
    },
  },
});

export const { setLaptopsProducts, setLaptopsSearchTerm } = laptopsProductSlice.actions;
export default laptopsProductSlice.reducer;
