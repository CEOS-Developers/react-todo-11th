import React, { useRef, useState, useCallback } from 'react';

import TodoInput from "../components/todo-input";
import TodoList from "../components/todo-list";

import styled from "styled-components";

export default function Home() {

  const [todos, setTodos] = useState([]);
  const nextId = useRef(0);

  const [counter, setCounter] = useState(1);

  const addTodo = ({content, date}) => {
    if ((content === undefined) || (date === undefined)) {
      alert('모든 항목을 입력해주세요!');
      return;
    }

    else if (String(date).length != 8){
      alert('날짜를 올바른 형식으로 입력해주세요!');
      return;
    }

    const todo = {
      id: nextId,
      content,
      date,
      checked: false
    }
    setTodos(todos.concat(todo)); 
    nextId.current += 1;

    alert('입력 완료!')
  }
  
  const todoRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Wrapper>
      <Header>리액트-투두</Header>
      <Contents>
        <TodoInput addTodo = {addTodo}/>
        <Space/>
        <TodoList todos={todos} todoRemove = {todoRemove}/>
      </Contents>
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
  justify-content: space-between;

`;

const Header = styled.p`
  font-size: 3rem;
  font-weight: 600;
  padding: 0px;
  margin: 0px 0px 3rem;
`;

const Space = styled.div`
  flex: 0.3;
`;
