import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profile";

const reducer = {
  profile: profileReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
