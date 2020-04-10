import React from "react";
import styled from "styled-components";

import TodoItem from "./todo-item";

export default function TodoList(props) {
  const { todoList } = props;
  return (
    <Wrapper>
      {todoList.map((todoData) => (
        <TodoItem
          key={todoData.date}
          date={todoData.date}
          todo={todoData.todo}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 18px;
  flex: 1 1 0%;
`;
