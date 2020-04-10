import React, { useState } from 'react';

import TodoItem from "./todo-item";

import styled from "styled-components";

export default function TodoList({completeTodo}) {
  return (
    <Wrapper>
      <TodoItem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 18px;
  flex: 1 1 0%;
`;
