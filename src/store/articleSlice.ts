import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticles } from "../types/IArticles";

interface ArticleState {
  articles: IArticles;
  selectedArticle: string;
}

const initialState: ArticleState = {
  articles: [],
  selectedArticle: "",
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    saveArticles(state, action: PayloadAction<IArticles>) {
      state.articles = [...action.payload, ...state.articles];
    },
    setSelectedArticle(state, action: PayloadAction<string>) {
      state.selectedArticle = action.payload;
    },
  },
});

export const articleActions = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
