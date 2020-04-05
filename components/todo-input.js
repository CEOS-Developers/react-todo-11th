import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./todo-item";

const mainColor = "#616161";

export default function TodoInput(props) {
  const { setTodos } = props;
  const [todo, setTodo] = useState({ time: "", content: "" });

  const timeHandler = (e) => {
    let updatedTime = e.target.value;
    if (updatedTime.length > 8) {
      updatedTime = updatedTime.substring(0, 8);
    }
    setTodo({ ...todo, time: updatedTime });
  };

  const contentHandler = (e) => {
    setTodo({ ...todo, content: e.target.value });
  };

  const onClick = () => {
    if (todo.time.length !== 8) {
      alert("날짜를 확인해 주세요!");
      return;
    }
    if (todo.content == 0) {
      alert("Todo를 확인해 주세요!");
      return;
    }

    setTodos((prev) => {
      return [...prev, todo];
    });

    setTodo({ time: "", content: "" });
    alert("입력되었습니다!");
  };

  return (
    <FormWrapper>
      <Row>
        <Label>시간</Label>
        <Input
          type="number"
          value={todo.time}
          maxLength="8"
          onChange={timeHandler}
          placeholder="날짜를 입력하세요 (ex.20200404)"
        />
      </Row>
      <Row>
        <Label>TODO</Label>
        <TextArea
          value={todo.content}
          onChange={contentHandler}
          resize="none"
          placeholder="할 일을 입력하세요"
        />
      </Row>
      <Button onClick={onClick}>등록</Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  flex: 1;
  border: solid 1px ${mainColor};
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  background-color: ${mainColor};
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  font-size: 1.5rem;
`;

const Label = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
`;

const Input = styled.input`
  width: 80%;
  border: solid 1px ${mainColor};
  padding: 0.5rem 0.8rem;
`;
const TextArea = styled.textarea`
  width: 80%;
  height: 30vh;
  border: solid 1px ${mainColor};
  padding: 0.5rem 0.8rem;
  resize: none;
`;
