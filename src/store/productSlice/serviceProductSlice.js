import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "productSlice/fetchAllProducts",
  async () => {
    try {
      const response = await axios.get(
        "https://61fe471fa58a4e00173c97ba.mockapi.io/products"
      );
      return response?.data;
    } catch (error) {
        error.message = "Sunucunuz ile ilgili hata oluştu";
      return error;
    }
  }
);
