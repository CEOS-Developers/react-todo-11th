import React from "react";

import TodoInput from "../components/todo-input";
import TodoList from "../components/todo-list";

import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Title>리액트-투두</Title>
      <Contents>
        <TodoInput />
        <EmtpySpace />
        <TodoList />
      </Contents>
    </Wrapper>
  );
}
const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  padding: 0px;
  margin: 0px 0px 3rem;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: rgb(155, 197, 195);
  padding: 4rem 5rem;
  color: white;
`;

const Contents = styled.div`
  display: flex;
`;

const EmtpySpace = styled.div`
  flex: 0.3;
`;
