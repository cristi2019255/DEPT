import { createSlice } from "@reduxjs/toolkit";
import { ClientCardProps } from "../../../shared/types";

const initialCards: ClientCardProps[] = [];

const heroReducer = createSlice({
  name: "heroReducer",
  initialState: {
    isLoading: true,
    data: initialCards,
  },
  reducers: {
    fetchHero: (state) => {
      console.log("fetching hero");
      state.data = [
        {
          title: "WORK",
          description:
            "A selection of projects that pioneer tech and marketing to help brands stay ahead.",
          image: "https://picsum.photos/700/300?random=1",
          scaled: "full",
          contentWidth: "left",
        },
      ];
      state.isLoading = false;
    },
  },
});

export default heroReducer.reducer;
export const { fetchHero } = heroReducer.actions;
