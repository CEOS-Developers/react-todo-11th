import React from "react";
import styled from "styled-components";

export default function TodoItem({ id, task, date, onClickComplete }) {
  return (
    <Wrapper>
      <TodoContents>{task}</TodoContents>
      <CompleteSection>
        {date}
        <Complete onClick={() => onClickComplete(id)}>완료</Complete>
      </CompleteSection>
    </Wrapper>
  );
}
const Complete = styled.button`
  color: white;
  background-color: rgb(97, 97, 97);
  font-size: 1.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
`;
const CompleteSection = styled.p`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`;
const TodoContents = styled.p`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  padding: 1rem 2rem;
  border-width: 1px;
  border-style: solid;
  border-color: black;
`;
