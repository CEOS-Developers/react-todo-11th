import React, { useState } from "react";

import TodoInput from "../components/todo-input";
import TodoList from "../components/todo-list";

import styled from "styled-components";

let taskFlag = 0;
let dateFlag = 0;
export default function Home() {
  const [date, setDate] = useState();
  const [task, setTask] = useState();
  const [todos, setTodoList] = useState([]);

  const onChangeTask = (e) => {
    setTask(e.target.value);
    taskFlag++;
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
    dateFlag++;
  };

  const stateReset = (e) => {
    dateFlag = 0;
    taskFlag = 0;
    setDate("");
    setTask("");
  };
  const addTodo = (e) => {
    if (dateFlag === 0 || taskFlag === 0) {
      alert("모든 항목을 입력해주세요!");
    } else {
      if (date.length === 8 && date > 20200101) {
        setTodoList([
          ...todos,
          {
            id: todos.length,
            date,
            task,
          },
        ]);
        stateReset(e);
        alert("입력 완료!");
      } else {
        alert("날짜를 올바른 형식으로 입력해주세요!");
      }
    }
  };

  const onClickComplete = (id) => {
    const newTodos = [...todos];
    setTodoList(newTodos.filter((todo) => todo.id !== id));
    console.log(newTodos);
  };

  return (
    <Wrapper>
      <Title>리액트-투두</Title>
      <Contents>
        <TodoInput
          date={date}
          task={task}
          onChangeDate={onChangeDate}
          onChangeTask={onChangeTask}
          todos={todos}
          addTodo={addTodo}
        />
        <BlankSpace />
        <TodoList todos={todos} onClickComplete={onClickComplete} />
      </Contents>
    </Wrapper>
  );
}

const BlankSpace = styled.div`
  flex: 0.3;
`;
const Title = styled.p`
  font-size: 3rem;
  font-weight: 600;
  padding: 0px;
  margin: 0px 0px 3rem;
`;
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: rgb(155, 197, 195);
  padding: 4rem 5rem;
  font-size: 0.1rem;
  color: white;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
