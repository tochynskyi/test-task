import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import {
  useLazySearchArticlesQuery,
  useSearchArticlesQuery,
} from "../../store/articleAPI";
import { ArticleList } from "../ArticleList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
`;

const Button = styled.button`
  min-width: 150px;
  height: 50px;
  background-color: #0066ff;
  color: #fff;
  font-size: 20px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    color: #0066ff;
  }
`;

export const Home: FC = () => {
  const { articles } = useAppSelector((state) => state.article);
  const { saveArticles } = useActions();
  const { isLoading, isError, data } = useSearchArticlesQuery();
  const [fetchArticles, { isLoading: isLazyLoading, isError: isLazyError }] =
    useLazySearchArticlesQuery();

  const onFetchNew = async () => {
    const { data: lazyData } = await fetchArticles();
    lazyData && saveArticles(lazyData);
  };

  useEffect(() => {
    !articles.length && data && saveArticles(data);
  }, [data]);

  return (
    <Container>
      {(isLoading || isLazyLoading) && <p>Loading...</p>}
      {(isError || isLazyError) && <p>Something went wrong!</p>}
      <ArticleList />
      <Button onClick={onFetchNew}>GET NEW</Button>
    </Container>
  );
};
