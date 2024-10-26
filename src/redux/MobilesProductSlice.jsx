import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobilesProducts: [],
  mobilesSearchTerm: '',
  mobilesfilteredData: [],
};

const mobilesProductSlice = createSlice({
  name: 'mobilesProducts',
  initialState: initialState,
  reducers: {
    setMobilesProducts(state, action) {
      state.mobilesProducts = action.payload;
      state.mobilesfilteredData = action.payload; 
    },
    setMobilesSearchTerm(state, action) {
      state.mobilesSearchTerm = action.payload;
      state.mobilesfilteredData = state.mobilesProducts.filter(product =>
        product.name.toLowerCase().includes(state.mobilesSearchTerm.toLowerCase())
      );
    },
  },
});

export const { setMobilesProducts, setMobilesSearchTerm } = mobilesProductSlice.actions;
export default mobilesProductSlice.reducer;
