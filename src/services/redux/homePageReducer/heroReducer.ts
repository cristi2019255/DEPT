import { createSlice } from "@reduxjs/toolkit";
import { ClientCardProps } from "../../../shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialCards: ClientCardProps[] = [];

const fetchHero = createAsyncThunk("fetchHero", async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/1`);

  const data = await response.json();
  console.log(data);

  const data1: ClientCardProps[] = [
    {
      title: data.title,
      description: data.body,
      image: "https://picsum.photos/500/200",
      scaled: "full",
      industry: "all",
      serviceDomain: "all",
    },
  ];

  return data1;
});

const heroReducer = createSlice({
  name: "heroReducer",
  initialState: {
    isLoading: true,
    data: initialCards,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHero.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHero.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchHero.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.isLoading = false;
    });
  },
});

export default heroReducer.reducer;
export { fetchHero };
