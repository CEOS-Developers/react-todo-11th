import React, { useState } from "react";
import styled from "styled-components";

import TodoList from "./todo-list.js";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  return (
    <Wrapper>
      <DateInput>
        <DateLabel>날짜</DateLabel>
        <DateInputArea
          placeholder="날짜를 입력하세요 (ex.20200404)"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </DateInput>
      <TaskInput>
        <TodoLabel>TODO</TodoLabel>
        <TaskTextArea
          placeholder="할 일을 입력하세요"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      </TaskInput>
      <Submit
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        등록
      </Submit>
    </Wrapper>
  );
}
//배열에 담아서 List에게 통으로 넘기기
const Submit = styled.button`
  color: white;
  background-color: rgb(97, 97, 97);
  font-size: 1.5rem;
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
`;
const DateLabel = styled.p`
  font-size: 1.5rem;
  padding: 0px;
  margin: 0px;
`;
const DateInputArea = styled.input`
  width: 80%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(97, 97, 97);
  border-image: initial;
  padding: 0.5rem 0.8rem;
`;
const TodoLabel = styled.p`
  font-size: 1.5rem;
  padding: 0px;
  margin: 0px;
`;
const TaskTextArea = styled.textarea`
  width: 80%;
  height: 30vh;
  resize: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(97, 97, 97);
  border-image: initial;
  padding: 0.5rem 0.8rem;
`;
const DateInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const TaskInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
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
