import React from "react";
import styled from "styled-components";

import TodoItem from "./todo-item";

export default function TodoList(props) {
  const { todos, setTodos } = props;

  return (
    <Wrapper>
      {todos
        .sort((a, b) => {
          return a.time.localeCompare(b.time);
        })
        .map((item, index) => (
          <TodoItem key={index} {...item} setTodos={setTodos} index={index} />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 18px;
  flex: 1;
`;
