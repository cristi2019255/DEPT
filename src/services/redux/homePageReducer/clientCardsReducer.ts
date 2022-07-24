import { createSlice } from "@reduxjs/toolkit";
import { ClientCardProps } from "../../../shared/types";
import { clientCardsFirst, clientCardsSecond } from "../mock";

const initialCards: ClientCardProps[] = [];

const clientCardsReducer = createSlice({
  name: "clientCardsReducer",
  initialState: {
    first: {
      isLoading: true,
      data: initialCards,
    },
    second: {
      isLoading: true,
      data: initialCards,
    },
  },
  reducers: {
    fetchClientCardsFirst: (state) => {
      state.first.data = clientCardsFirst;
      state.first.isLoading = false;
    },
    fetchClientCardsSecond: (state) => {
      state.second.data = clientCardsSecond;
      state.second.isLoading = false;
    },
  },
});

export default clientCardsReducer.reducer;
export const { fetchClientCardsFirst, fetchClientCardsSecond } =
  clientCardsReducer.actions;
