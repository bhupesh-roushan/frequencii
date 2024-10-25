import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  laptopsProducts: [],
  searchTerm: '',
  filteredData: [],
};

const laptopsProductSlice = createSlice({
  name: 'laptopsProducts',
  initialState: initialState,
  reducers: {
    setLaptopsProducts(state, action) {
      state.laptopsProducts = action.payload;
    },
    setLaptopsSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.laptopsProducts.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setLaptopsProducts, setLaptopsSearchTerm } = laptopsProductSlice.actions;
export default laptopsProductSlice.reducer;
