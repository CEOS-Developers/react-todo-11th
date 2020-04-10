import React from "react";
import styled from "styled-components";

import TodoItem from "./todo-item";

export default function TodoList(props) {
  return (
    <Wrapper>
      <TodoItem task={props.task} date={props.date} />
    </Wrapper>
  );
}
//map으로 잘라서 Item으로 넘기기
const Wrapper = styled.div`
  font-size: 18px;
  flex: 1 1 0%;
`;
