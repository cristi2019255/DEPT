import { createSlice } from "@reduxjs/toolkit";
import { WorkSelectorProps } from "../../../shared/types";
import { workSelector } from "../mock";

const empty: string[] = [];
const initialCategories: WorkSelectorProps = {
  industries: empty,
  services: empty,
  selectedIndustry: "all",
  selectedService: "all",
};

const categoriesReducer = createSlice({
  name: "categoriesReducer",
  initialState: {
    isLoading: true,
    data: initialCategories,
  },
  reducers: {
    fetchCategories: (state) => {
      state.data.industries = workSelector.industries;
      state.data.services = workSelector.services;
      state.isLoading = false;
    },
    setSelectedIndustry: (state, action) => {
      state.data.selectedIndustry = action.payload;
    },
    setSelectedService: (state, action) => {
      state.data.selectedService = action.payload;
    },
  },
});

export default categoriesReducer.reducer;
export const { fetchCategories, setSelectedIndustry, setSelectedService } =
  categoriesReducer.actions;
