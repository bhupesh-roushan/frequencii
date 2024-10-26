import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menProducts: [],
  menSearchTerm: '',
  menfilteredData: [],
};

const menProductSlice = createSlice({
  name: 'menProducts',
  initialState: initialState,
  reducers: {
    setMenProducts(state, action) {
      state.menProducts = action.payload;
      state.menfilteredData = action.payload;
    },
    setMenSearchTerm(state, action) {
      state.menSearchTerm = action.payload;
      state.menfilteredData = state.menProducts.filter(product =>
        product.name.toLowerCase().includes(state.menSearchTerm.toLowerCase())
      );
    },
  },
});

export const { setMenProducts, setMenSearchTerm } = menProductSlice.actions;
export default menProductSlice.reducer;
