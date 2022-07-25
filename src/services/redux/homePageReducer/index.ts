import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesReducer";
import clientCardsReducer from "./clientCardsReducer";
import clientLogosReducer from "./clientLogosReducer";
import heroReducer from "./heroReducer";
import quoteReducer from "./quoteReducer";

const homePageReducer = combineReducers({
  hero: heroReducer,
  client: clientCardsReducer,
  logos: clientLogosReducer,
  quote: quoteReducer,
  categories: categoriesReducer,
});

export default homePageReducer;

export { fetchHero } from "./heroReducer";
export {
  fetchClientCardsFirst,
  fetchClientCardsSecond,
} from "./clientCardsReducer";
export { fetchClientLogos } from "./clientLogosReducer";
export { fetchQuote } from "./quoteReducer";
export {
  fetchCategories,
  setSelectedIndustry,
  setSelectedService,
} from "./categoriesReducer";
