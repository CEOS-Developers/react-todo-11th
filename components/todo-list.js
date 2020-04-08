import React from "react";
import styled from "styled-components";

import TodoItem from "./todo-item";

export default function TodoList() {
  return (
    <Wrapper>
      Todo list가 들어가는 자리입니다!
      <Indentation />
      <TodoItem />
    </Wrapper>
  );
}

const Indentation = styled.div`
  flex: 0.3;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 37rem;
  flex: 1 1 0%;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-image: initial;
  padding: 1rem 2rem;
`;
