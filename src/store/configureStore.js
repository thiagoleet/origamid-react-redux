import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./slices/login";
import logger from "./middleware/logger";

const reducer = combineReducers({ login });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
