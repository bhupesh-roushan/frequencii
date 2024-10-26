import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bodyCareProducts: [],
  bodyCareSearchTerm: '',
  bodyCarefilteredData: [],
};

const bodyCareProductSlice = createSlice({
  name: 'bodyCareProducts',
  initialState: initialState,
  reducers: {
    setBodyCareProducts(state, action) {
      state.bodyCareProducts = action.payload;
      state.bodyCarefilteredData = action.payload; // Initialize filtered data on load
    },
    setBodyCareSearchTerm(state, action) {
      state.bodyCareSearchTerm = action.payload;
      state.bodyCarefilteredData = state.bodyCareProducts.filter((product) =>
        product.name.toLowerCase().includes(state.bodyCareSearchTerm.toLowerCase())
      );
    },
  },
});

export const { setBodyCareProducts, setBodyCareSearchTerm } = bodyCareProductSlice.actions;
export default bodyCareProductSlice.reducer;
