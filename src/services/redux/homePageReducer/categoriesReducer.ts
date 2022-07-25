import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WorkSelectorProps } from "../../../shared/types";
import { workSelector } from "../mock";

const empty: string[] = [];
const initialCategories: WorkSelectorProps = {
  industries: empty,
  services: empty,
  selectedIndustry: "all",
  selectedService: "all",
};

const fetchCategories = createAsyncThunk<
  // Return type of the payload creator
  WorkSelectorProps,
  // First argument to the payload creator
  void,
  {}
>("data/fetchCategories", async () => {
  // returning mock since the API is not developed yet
  // TODO: change to real API call
  return await new Promise((resolve) =>
    setTimeout(() => resolve(workSelector), 0)
  );
});

const categoriesReducer = createSlice({
  name: "categoriesReducer",
  initialState: {
    isLoading: true,
    data: initialCategories,
    error: "",
  },
  reducers: {
    setSelectedIndustry: (state, action) => {
      state.data.selectedIndustry = action.payload;
    },
    setSelectedService: (state, action) => {
      state.data.selectedService = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.data.industries = action.payload.industries;
      state.data.services = action.payload.services;
      state.isLoading = false;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.isLoading = false;
    });
  },
});

export default categoriesReducer.reducer;
export const { setSelectedIndustry, setSelectedService } =
  categoriesReducer.actions;
export { fetchCategories };
