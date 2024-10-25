import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  kidsProducts: [],
  searchTerm: '',
  filteredData: [],
};

const kidsProductSlice = createSlice({
  name: 'kidsProducts',
  initialState: initialState,
  reducers: {
    setKidsProducts(state, action) {
      state.kidsProducts = action.payload;
    },
    setKidsSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.kidsProducts.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setKidsProducts, setKidsSearchTerm } = kidsProductSlice.actions;
export default kidsProductSlice.reducer;
