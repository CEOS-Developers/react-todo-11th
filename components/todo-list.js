import React, { useState } from 'react';

import TodoItem from "./todo-item";

import styled from "styled-components";

export default function TodoList({todos, todoRemove}) {

  return (
    <Wrapper>
        {todos.map(todo => <TodoItem key={todo.id} {...todo} todoRemove={todoRemove}/>)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 18px;
  flex: 1 1 0%;
`;
