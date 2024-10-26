import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  kidsProducts: [],
  kidsSearchTerm: '',
  kidsfilteredData: [],
};

const kidsProductSlice = createSlice({
  name: 'kidsProducts',
  initialState: initialState,
  reducers: {
    setKidsProducts(state, action) {
      state.kidsProducts = action.payload;
      state.kidsfilteredData = action.payload;
    },
    setKidsSearchTerm(state, action) {
      state.kidsSearchTerm = action.payload;
      state.kidsfilteredData = state.kidsProducts.filter(product =>
        product.name.toLowerCase().includes(state.kidsSearchTerm.toLowerCase())
      );
    },
  },
});

export const { setKidsProducts, setKidsSearchTerm } = kidsProductSlice.actions;
export default kidsProductSlice.reducer;
