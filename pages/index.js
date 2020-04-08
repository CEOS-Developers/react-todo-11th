import React, { useState } from "react";

import TodoInput from "../components/todo-input";
import TodoList from "../components/todo-list";

import styled from "styled-components";

export default function Home() {
  const [todos, setTodos] = useState([
  ])

  const [counter, setCounter] = useState(1) // todo 샘플 지울때 0으로 바꾸기.

  // todo 추가하기
  const addTodo = ({ content, dueDate }) => {
    // check whether every input is filled
    if ((content === undefined) || (dueDate === undefined)) {
      alert('모든 항목을 입력해주세요!');
      return;
    }

    // check whether dueDate is valid
    const dateRegExp = /^\d{8}$/;
    if (!dateRegExp.exec(dueDate)) {
      alert('날짜를 올바른 형식으로 입력해주세요!');
      return;
    }

    // add todo to todos
    // increment counter
    setCounter(counter + 1);
    setTodos([
      ...todos,
      { id: counter, content, dueDate, isComplete: false }
    ])

    alert('입력 완료!')
  }

  // todo 완료하기
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, isComplete: true } : todo)
    )
  }

  return (
    <Wrapper>
      <Title>리액트-투두</Title>
      <Contents>
        <TodoInput addTodo={addTodo} />
        <div style={{flex:0.3}}></div>
        <TodoList completeTodo={completeTodo} todos={todos} />
      </Contents>
      <div style={{position:'fixed', right:0, top:0, padding: '1px', fontSize:'9px', backgroundColor:'grey'}}>CEOS 11기 정시원</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    min-height: 100vh;
    background-color: rgb(155, 197, 195);
    padding: 4rem 5rem;
`;

const Contents = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: 600;
  padding: 0px;
  margin: 0px 0px 3rem;
`