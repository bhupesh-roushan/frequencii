import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hairCareProducts: [],
  searchTerm: '',
  filteredData: [],
};

const hairCareProductSlice = createSlice({
  name: 'hairCareProducts',
  initialState: initialState,
  reducers: {
    setHairCareProducts(state, action) {
      state.hairCareProducts = action.payload;
    },
    setHairCareSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.hairCareProducts.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setHairCareProducts, setHairCareSearchTerm } = hairCareProductSlice.actions;
export default hairCareProductSlice.reducer;
