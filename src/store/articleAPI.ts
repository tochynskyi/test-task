import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticles } from "../types/IArticles";

export const articlesAPI = createApi({
  reducerPath: "articlesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baconipsum.com/",
  }),
  endpoints: (build) => ({
    searchArticles: build.query<IArticles, void>({
      query: () => "api/?type=meat-and-filler",
    }),
  }),
});

export const { useSearchArticlesQuery, useLazySearchArticlesQuery } = articlesAPI;
