import React from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 30px 20px;
  max-width: 800px;
  margin: 30px auto;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
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
