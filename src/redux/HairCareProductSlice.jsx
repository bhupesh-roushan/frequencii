import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hairCareProducts: [],
  hairCareSearchTerm: '',
  hairCarefilteredData: [],
};

const hairCareProductSlice = createSlice({
  name: 'hairCareProducts',
  initialState: initialState,
  reducers: {
    setHairCareProducts(state, action) {
      state.hairCareProducts = action.payload;
      state.hairCarefilteredData= action.payload;
    },
    setHairCareSearchTerm(state, action) {
      state.hairCareSearchTerm = action.payload;
      state.hairCarefilteredData = state.hairCareProducts.filter(product =>
        product.name.toLowerCase().includes(state.hairCareSearchTerm.toLowerCase())
      );
    },
  },
});

export const { setHairCareProducts, setHairCareSearchTerm } = hairCareProductSlice.actions;
export default hairCareProductSlice.reducer;
