import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./slices/login";
import contador from "./slices/contador";
import logger from "./middleware/logger";
import localStorageMiddleware from "./middleware/localStorage";

const reducer = combineReducers({ login, contador });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, localStorageMiddleware),
});

export default store;
