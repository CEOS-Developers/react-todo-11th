import React, {useState} from 'react';

import TodoInput from "../components/todo-input";
import TodoList from "../components/todo-list";

import styled from "styled-components";

export default function Home() {

  const [todos, setTodos] = useState([]);
  const [index, setIndex] = useState(1);

  const handleAdd = (todo) => {

    const {content, date} = todo;

    if (content === "" || date === "") {
      alert('모든 항목을 입력해주세요!');
      return;
    }

    else if (String(date).length != 8){
      alert('날짜를 올바른 형식으로 입력해주세요!');
      return;
    }

    const newTodo = {
      content,
      date
    }

    setTodos(todos.concat(newTodo)); 
    alert('입력 완료!')
  }

  const handleDelete = (index) = ()=> {
    setTodos([...todo.slice(0,index), ...todo.slice(index+1, todo.length)]);
  }

  return (
    <Wrapper>
      <Header>리액트-투두</Header>
      <Contents>
        <TodoInput onSubmit = {handleAdd}/>
        <Space/>
        <TodoList {...{todos}} onDelete = {handleDelete}/>
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

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin: 0px 0px 3rem;
`;

const Space = styled.div`
  flex: 1;
`;
