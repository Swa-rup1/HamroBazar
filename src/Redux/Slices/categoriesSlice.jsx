import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../../Services/fetchCategories";

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
