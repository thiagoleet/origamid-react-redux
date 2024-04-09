import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "../util/createAsyncSlice";
import getLocalStorage from "../util/getLocalStorage";

const TOKEN_API_URL = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
const USER_API_URL = "https://dogsapi.origamid.dev/json/api/user";

const token = createAsyncSlice({
  name: "token",
  initialState: {
    data: {
      token: getLocalStorage("token", undefined),
    },
  },
  reducers: {
    fetchSuccess: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: "token",
              value: payload.token,
            },
          },
        };
      },
    },
    removeToken(state) {
      state.data = null;
    },
  },
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
  reducers: {
    removeUser(state) {
      state.data = null;
    },
  },
});

const reducer = combineReducers({ token: token.reducer, user: user.reducer });

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;
const { removeToken } = token.actions;
const { removeUser } = user.actions;

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

export const autoLogin = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.login.token.data;

  if (token) {
    await dispatch(fetchUser(token));
  }
};

export const userLogout = () => (dispatch) => {
  dispatch(removeUser());
  dispatch(removeToken());
  window.localStorage.removeItem("token");
};

export default reducer;
