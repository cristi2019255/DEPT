import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homePageReducer, {
  fetchHero,
  fetchCategories,
  fetchClientCardsFirst,
  fetchClientCardsSecond,
  fetchClientLogos,
  fetchQuote,
  setSelectedIndustry,
  setSelectedService,
} from "./homePageReducer";

const rootReducer = combineReducers({
  homePage: homePageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

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
