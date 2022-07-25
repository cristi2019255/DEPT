import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import thunkMiddleware from "redux-thunk";
import homePageReducer, {
  fetchCategories,
  fetchClientCardsFirst,
  fetchClientCardsSecond,
  fetchClientLogos,
  fetchQuote,
  setSelectedIndustry,
  setSelectedService,
  fetchHero,
} from "./homePageReducer";

const rootReducer = combineReducers({
  homePage: homePageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export {
  fetchHero,
  fetchCategories,
  fetchClientCardsFirst,
  fetchClientCardsSecond,
  fetchClientLogos,
  fetchQuote,
  setSelectedIndustry,
  setSelectedService,
};
