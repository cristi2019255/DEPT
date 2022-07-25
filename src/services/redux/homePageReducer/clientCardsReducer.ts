import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ClientCardProps } from "../../../shared/types";
import { clientCardsFirst, clientCardsSecond } from "../mock";

const initialCards: ClientCardProps[] = [];

const initialState = {
  first: {
    isLoading: true,
    data: initialCards,
  },
  second: {
    isLoading: true,
    data: initialCards,
  },
  error: "",
};

const fetchClientCardsFirst = createAsyncThunk<
  // Return type of the payload creator
  ClientCardProps[],
  // First argument to the payload creator
  number,
  {}
>("data/fetchClientCardsFirstPart", async (amount: number) => {
  // returning mock since the API is not developed yet
  // TODO: change to real API call

  return await new Promise((resolve) =>
    setTimeout(() => {
      if (amount <= 0) {
        resolve(clientCardsFirst);
      } else {
        resolve(clientCardsFirst.slice(0, amount));
      }
    }, 0)
  );
});

const fetchClientCardsSecond = createAsyncThunk<
  // Return type of the payload creator
  ClientCardProps[],
  // First argument to the payload creator
  number,
  {}
>("data/fetchClientCardsSecondPart", async (amount: number) => {
  // returning mock since the API is not developed yet
  // TODO: change to real API call

  return await new Promise((resolve) =>
    setTimeout(() => {
      if (amount <= 0) {
        resolve(clientCardsSecond);
      } else {
        resolve(clientCardsSecond.slice(0, amount));
      }
    }, 0)
  );
});

const clientCardsReducer = createSlice({
  name: "clientCardsReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClientCardsFirst.pending, (state, action) => {
      state.first.isLoading = true;
    });
    builder.addCase(fetchClientCardsFirst.fulfilled, (state, action) => {
      state.first.data = action.payload;
      state.first.isLoading = false;
    });
    builder.addCase(fetchClientCardsFirst.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.first.isLoading = false;
    });

    builder.addCase(fetchClientCardsSecond.pending, (state, action) => {
      state.second.isLoading = true;
    });
    builder.addCase(fetchClientCardsSecond.fulfilled, (state, action) => {
      state.second.data = action.payload;
      state.second.isLoading = false;
    });
    builder.addCase(fetchClientCardsSecond.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.second.isLoading = false;
    });
  },
});

export default clientCardsReducer.reducer;
export { fetchClientCardsFirst, fetchClientCardsSecond };
