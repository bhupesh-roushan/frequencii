import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0, // Initialized as a number
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);

      const itemPrice = parseFloat(newItem.price.replace(/,/g, ""));

      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += itemPrice;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: itemPrice,
          quantity: 1,
          totalPrice: itemPrice,
          image: newItem.image,
        });
      }

      state.totalPrice = parseFloat(state.totalPrice) + itemPrice;
      state.totalQuantity++;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);

      if (findItem) {
        const itemTotalPrice = parseFloat(findItem.totalPrice);

        state.totalPrice = parseFloat(state.totalPrice) - itemTotalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },

    increaseQuantity(state,action){
      const id=action.payload;
      const findItem=state.products.find((item)=>item.id===id)
      if(findItem){
        findItem.quantity++;
        findItem.totalPrice+=findItem.price
        state.totalQuantity++;
        state.totalPrice+=findItem.price
      }
    },
    decreaseQuantity(state,action){
      const id=action.payload;
      const findItem=state.products.find((item)=>item.id===id)
      if(findItem.quantity>1){
        if(findItem){
          findItem.quantity--;
          findItem.totalPrice-=findItem.price
          state.totalQuantity--;
          state.totalPrice-=findItem.price
        }
      }
      
    }
  },
});

export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;



