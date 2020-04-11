import React, { useState } from "react";

import { MemoizedTodoInput } from "../components/todo-input";
import TodoList from "../components/todo-list";

import styled from "styled-components";

export default function Home() {
  const [todoID, setTodoID] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const initForm = (setDate, setTodo) => {
    setDate("");
    setTodo("");
  };
  // 투두 데이터 추가
  const addItem = (e, date, todo) => {
    e.preventDefault();
    if (date == "" || todo == "") {
      alert("모든 항목을 입력해주세요!");
      return;
    } else if (String(date).length !== 8) {
      alert("날짜를 올바른 형식으로 입력해주세요!");
      return;
    }
    e.target.reset();
    todoList.push({ date: date, todo: todo, id: todoID });
    setTodoID(todoID + 1);
    alert("입력되었습니다!");
  };
  //투두 데이터 삭제
  const deleteItem = (e) => {
    const id = e.target.value;
    const newTodoList = todoList.filter(
      (todoData) => todoData.id !== Number(id)
    );
    setTodoList(newTodoList);
  };
  return (
    <Wrapper>
      <Title>리액트-투두</Title>
      <Contents>
        <MemoizedTodoInput addItem={addItem} initForm={initForm} />
        <EmtpySpace />
        <TodoList todoList={todoList} deleteItem={deleteItem} />
      </Contents>
    </Wrapper>
  );
}
const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  padding: 0px;
  margin: 0px 0px 3rem;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: rgb(155, 197, 195);
  padding: 4rem 5rem;
  color: white;
`;

const Contents = styled.div`
  display: flex;
`;

const EmtpySpace = styled.div`
  flex: 0.3;
`;
