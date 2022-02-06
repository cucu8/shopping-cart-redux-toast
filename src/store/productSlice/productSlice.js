import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./serviceProductSlice";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    productList: [],
    status: "pending",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchAllProducts.pending]: (state) => {
      state.status = "pending";
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.status = "success";
      
      state.productList = action.payload;
    },
  },
});

export default productSlice.reducer;
