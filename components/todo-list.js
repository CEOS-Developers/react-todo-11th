import React from "react";
import styled from "styled-components";

import TodoItem from "./todo-item";

export default function TodoList({ todos }) {
  return (
    <Wrapper>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 18px;
  flex: 1 1 0%;
`;
