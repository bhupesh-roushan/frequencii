import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deodrantsProducts: [],
  deodrantsSearchTerm: '',
  deodrantsfilteredData: [],
};

const deodrantsProductSlice = createSlice({
  name: 'deodrantsProducts',
  initialState: initialState,
  reducers: {
    setDeodrantsProducts(state, action) {
      state.deodrantsProducts = action.payload;
      state.deodrantsfilteredData = action.payload;
    },
    setDeodrantsSearchTerm(state, action) {
      state.deodrantsSearchTerm = action.payload;
      state.deodrantsfilteredData = state.deodrantsProducts.filter((product) =>
        product.name.toLowerCase().includes(state.deodrantsSearchTerm.toLowerCase())
      );
    },
  },
});

export const { setDeodrantsProducts, setDeodrantsSearchTerm } = deodrantsProductSlice.actions;
export default deodrantsProductSlice.reducer;
