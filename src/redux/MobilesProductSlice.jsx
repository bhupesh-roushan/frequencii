import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobilesProducts: [],
  searchTerm: '',
  filteredData: [],
};

const mobilesProductSlice = createSlice({
  name: 'mobilesProducts',
  initialState: initialState,
  reducers: {
    setMobilesProducts(state, action) {
      state.mobilesProducts = action.payload;
    },
    setMobilesSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.mobilesProducts.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setMobilesProducts, setMobilesSearchTerm } = mobilesProductSlice.actions;
export default mobilesProductSlice.reducer;
