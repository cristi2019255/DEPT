import { createSlice } from "@reduxjs/toolkit";
import { clientsLogo } from "../mock";

const initialLogos: string[] = [];

const clientLogosReducer = createSlice({
  name: "clientLogosReducer",
  initialState: {
    isLoading: true,
    data: initialLogos,
  },
  reducers: {
    fetchClientLogos: (state) => {
      console.log("fetching client logos ...");
      state.data = clientsLogo;
      state.isLoading = false;
    },
  },
});

export default clientLogosReducer.reducer;
export const { fetchClientLogos } = clientLogosReducer.actions;
