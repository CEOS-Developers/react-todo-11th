import React from "react";
import styled from "styled-components";

export default function TodoInput() {
  return (
    <Wrapper>
      리액트-투두
      <br />
      시간을 입력하는 칸
      <br />
      Todo를 입력하는 칸
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: solid 1px;
  font-size: 18px;
  flex: 1;
`;
