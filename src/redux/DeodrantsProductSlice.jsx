import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deodrantsProducts: [],
  searchTerm: '',
  filteredData: [],
};

const deodrantsProductSlice = createSlice({
  name: 'deodrantsProducts',
  initialState: initialState,
  reducers: {
    setDeodrantsProducts(state, action) {
      state.deodrantsProducts = action.payload;
    },
    setDeodrantsSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.deodrantsProducts.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setDeodrantsProducts, setDeodrantsSearchTerm } = deodrantsProductSlice.actions;
export default deodrantsProductSlice.reducer;
