import { configureStore } from "@reduxjs/toolkit";
import { articlesAPI } from "./articleAPI";
import { articleReducer } from "./articleSlice";

export const store = configureStore({
  reducer: {
    [articlesAPI.reducerPath]: articlesAPI.reducer,
    article: articleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
