import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import { uid } from "../utils/uid";
import { ArticleItem } from "./ArticleItem";

const List = styled.ul`
  list-style: none;
  padding: 0 10px;
`;

export const ArticleList = () => {
	const { articles } = useAppSelector((state) => state.article);
  return (
    <List>
      {articles?.map((item: string) => {
        return <ArticleItem key={uid()} article={item} />;
      })}
    </List>
  );
};
