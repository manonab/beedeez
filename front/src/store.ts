import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {persistStore} from "redux-persist";
import persistedAuthReducer from "./helpers/authSlice";

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const persistor = persistStore(store);
