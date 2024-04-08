import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./slices/login";
import contador from "./slices/contador";
import logger from "./middleware/logger";

const reducer = combineReducers({ login, contador });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
