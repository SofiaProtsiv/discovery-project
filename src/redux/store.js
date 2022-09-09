import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./collectionSlice";
import searchReducer from ".//searchSlice";

export const store = configureStore({
  reducer: {
    collection: collectionReducer,
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
