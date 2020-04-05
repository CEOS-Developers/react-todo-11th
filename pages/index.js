import React, { useState } from "react";

import TodoInput from "../components/todo-input";
import TodoList from "../components/todo-list";

import styled from "styled-components";

const color = "#9bc5c3";

export default function Home() {
  const [todos, setTodos] = useState([]);

  return (
    <Wrapper>
      <Title>리액트-투두</Title>
      <Contents>
        <TodoInput setTodos={setTodos} />
        <div style={{ flex: "0.3" }} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${color};
  padding: 4rem 5rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: 600;
`;
