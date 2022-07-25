import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ClientQuoteProps } from "../../../shared/types";
import { quote } from "../mock";

const initialQuote: ClientQuoteProps = { quote: "", quoteAuthor: "" };

const fetchQuote = createAsyncThunk<
  // Return type of the payload creator
  ClientQuoteProps,
  // First argument to the payload creator
  void,
  {}
>("data/fetchQuote", async () => {
  // returning mock since the API is not developed yet
  // TODO: change to real API call
  return await new Promise((resolve) => setTimeout(() => resolve(quote), 0));
});

const quoteReducer = createSlice({
  name: "quoteReducer",
  initialState: {
    isLoading: true,
    data: initialQuote,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuote.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchQuote.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.isLoading = false;
    });
  },
});

export default quoteReducer.reducer;
export { fetchQuote };
