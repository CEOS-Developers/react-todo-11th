import React from "react";
import styled from "styled-components";

import TodoItem from "./todo-item";

export default function TodoList() {
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
