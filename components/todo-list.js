import React, { useEffect } from "react";
import styled from "styled-components";

import TodoItem from "./todo-item";

export default function TodoList(props) {
  const { todoList, deleteItem } = props;

  return (
    <Wrapper>
      {todoList
        .sort((a, b) => {
          return a.date - b.date;
        })
        .map((todoData) => (
          <TodoItem
            key={todoData.id}
            id={todoData.id}
            date={todoData.date}
            todo={todoData.todo}
            deleteItem={deleteItem}
          />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 18px;
  flex: 1 1 0%;
`;
