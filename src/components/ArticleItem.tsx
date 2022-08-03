import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";

const ListItem = styled.li`
  padding: 5px 10px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
`;

export const ArticleItem = ({ article }: { article: string }) => {
  const { setSelectedArticle } = useActions();
  const navigate = useNavigate();

  const onToArticle = () => {
    navigate("/article");
    setSelectedArticle(article);
  };

  return <ListItem onClick={onToArticle}>{article.split(".")[0]}.</ListItem>;
};
