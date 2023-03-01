import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {RootState} from "../store";

// Define the initial state for the authentication slice
export interface AuthState {
  isAuthenticated: boolean;
  userID: string | null;
  name: string | null;
  email: string | null;
  password: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userID: null,
  name: null,
  password: null,
  email: null,
};

// Define the authentication slice using createSlice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{userID: string}>) => {
      state.isAuthenticated = true;
      state.userID = action.payload.userID;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.userID = null;
    },
    signUp: (
      state,
      action: PayloadAction<{
        password: string;
        email: string;
      }>,
    ) => {
      state.isAuthenticated = false;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

// Create a persist config for the authentication slice
const authPersistConfig = {
  key: "auth",
  storage,
};

// Wrap the authentication slice reducer with the persistReducer function
const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer,
);

// Export the authentication slice reducer and actions
export const {login, logout, signUp} = authSlice.actions;
export default persistedAuthReducer;

// Define a selector for the authentication state
export const selectAuth = (state: RootState) => state.auth;
