import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    try {
      const res = await fetch("/shop.json");

      if (!res.ok) {
        throw new Error("Failed to request data fetch");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error.message);
      throw error;
    }
  }
);

export const productsSlice = createSlice({
  initialState: {
    products: [],
    status: "idle",
    error: null
  },
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const actions = productsSlice.actions;
export default productsSlice.reducer;
