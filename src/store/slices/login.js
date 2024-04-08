import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "../util/createAsyncSlice";

const TOKEN_API_URL = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
const USER_API_URL = "https://dogsapi.origamid.dev/json/api/user";

const token = createAsyncSlice({
  name: "token",
  fetchConfig: (user) => ({
    url: TOKEN_API_URL,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    },
  }),
});

const user = createAsyncSlice({
  name: "user",
  fetchConfig: (token) => ({
    url: USER_API_URL,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  }),
});

const reducer = combineReducers({ token: token.reducer, user: user.reducer });

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token) {
      await dispatch(fetchUser(payload.token));
    }
  } catch (err) {
    console.log(err);
  }
};

export default reducer;
