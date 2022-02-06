import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      //* eget ilgili item listemizde var ise elemanın indexini , yok ise -1 döndürür.
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
          (state.cartItems[itemIndex].cartQuantitiy += 1);
          toast.info(`${state.cartItems[itemIndex].name} quantitiy: ${state.cartItems[itemIndex].cartQuantitiy} `, {
              position:"bottom-left",
          })
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, cartQuantitiy: 1 },
          ];
          toast.success(`${action.payload.name} added`, {
              position: "bottom-right",
          });
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      },
      clearCart: (state) => {
          state.cartItems = [];
          localStorage.clear();
      }
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
