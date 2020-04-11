import React, { useState } from "react";

import { MemoizedTodoInput } from "../components/todo-input";
import TodoList from "../components/todo-list";

import styled from "styled-components";

export default function Home() {
  const [date, setDate] = useState("");
  const [todo, setTodo] = useState("");
  const [todoID, setTodoID] = useState(0);
  const [todoList, setTodoList] = useState([]);

  // 값이 바뀔때마다 실행
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };
  const onChangeDate = (e) => {
    //입력을 8자리 넘어가면 받지 않도록 설정
    if (String(e.target.value).length <= 8) setDate(e.target.value);
  };

  const initForm = () => {
    setDate("");
    setTodo("");
  };
  // 투두 데이터 추가
  const addItem = (e) => {
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
    initForm();
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
        <MemoizedTodoInput
          date={date}
          todo={todo}
          onChangeDate={onChangeDate}
          onChangeTodo={onChangeTodo}
          addItem={addItem}
        />
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
