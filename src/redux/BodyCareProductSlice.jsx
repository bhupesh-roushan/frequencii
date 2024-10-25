import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bodyCareProducts: [],
  searchTerm: '',
  filteredData: [],
};

const bodyCareProductSlice = createSlice({
  name: 'bodyCareProducts',
  initialState: initialState,
  reducers: {
    setBodyCareProducts(state, action) {
      state.bodyCareProducts = action.payload;
    },
    setBodyCareSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.bodyCareProducts.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setBodyCareProducts, setBodyCareSearchTerm } = bodyCareProductSlice.actions;
export default bodyCareProductSlice.reducer;
