import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./slices/login";
import contador from "./slices/contador";
import photos from "./slices/photos";
import logger from "./middleware/logger";
import localStorageMiddleware from "./middleware/localStorage";

const reducer = combineReducers({ login, contador, photos });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, localStorageMiddleware),
});

export default store;
