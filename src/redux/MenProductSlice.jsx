import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menProducts: [],
  searchTerm: '',
  filteredData: [],
};

const menProductSlice = createSlice({
  name: 'menProducts',
  initialState: initialState,
  reducers: {
    setMenProducts(state, action) {
      state.menProducts = action.payload;
    },
    setMenSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.menProducts.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setMenProducts, setMenSearchTerm } = menProductSlice.actions;
export default menProductSlice.reducer;
