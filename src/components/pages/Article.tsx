import React from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  width: 800px;
  margin: 0 auto;
`;

export const Article = () => {
  const { selectedArticle } = useAppSelector((state) => state.article);
  return (
    <Container>
      {!selectedArticle && <Navigate to="/" replace={true} />}
      <p>{selectedArticle}</p>
    </Container>
  );
};
