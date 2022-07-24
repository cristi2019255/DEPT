import { createSlice } from "@reduxjs/toolkit";
import { ClientQuoteProps } from "../../../shared/types";
import { quote } from "../mock";

const initialQuote: ClientQuoteProps = { quote: "", quoteAuthor: "" };

const quoteReducer = createSlice({
  name: "quoteReducer",
  initialState: {
    isLoading: true,
    data: initialQuote,
  },
  reducers: {
    fetchQuote: (state) => {
      state.data = quote;
      state.isLoading = false;
    },
  },
});

export default quoteReducer.reducer;
export const { fetchQuote } = quoteReducer.actions;
