import React from "react";
import styled from "styled-components";

import TodoItem from "./todo-item";

export default function TodoList() {
  return (
    <Wrapper>
      Todo list가 들어가는 자리입니다!
      <TodoItem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: solid 1px;
  font-size: 18px;
  flex: 1;
`;
