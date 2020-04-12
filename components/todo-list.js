import React, { useState } from 'react';

import TodoItem from "./todo-item";

import styled from "styled-components";

export default function TodoList({todos, onDelete}) {

  return (
    <Wrapper>
      {todos.map((todo, index) => <TodoItem key={JSON.stringify(todo)} {...todo} onDelete={onDelete(index)} />)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 18px;
  flex: 1 1 0%;
`;
