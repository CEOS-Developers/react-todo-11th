import React, { useState } from 'react';

import styled from "styled-components";

export default function TodoInput({addTodo}){

  const [newTodo, setNewTodo] = useState({});

  const changeInputData = (e) => {
    setNewTodo({...newTodo, [e.target.name]:e.target.value});
  }

  return (
    <Wrapper>
      <TimeBox>
        <Time>시간</Time>
        <InputDay name="date" type="number" placeholder="날짜를 입력하세요 (ex.20200404)" 
        onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,8)}}
        onChange={changeInputData}
        />
      </TimeBox>
      <TodoBox>
        <Todo>TODO</Todo>
        <InputTodo name="content" placeholder='할 일을 입력하세요' onChange={changeInputData}></InputTodo>
      </TodoBox>
      <EnterBtn onClick={() => addTodo({...newTodo})}>등록</EnterBtn>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  height: 37rem;
  flex: 1
  border: 1px, solid, black;
  padding: 1rem 2rem;
`;

const TimeBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const Time = styled.p`
  font-size: 1.5rem;
  padding: 0px;
  margin: 0px;
`;

const InputDay= styled.input`
  width: 80%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(97, 97, 97);
  border-image: initial;
  padding: 0.5rem 0.8rem;
`;

const TodoBox= styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const Todo = styled.p`
  font-size: 1.5rem;
  padding: 0px;
  margin: 0px;
`;

const InputTodo = styled.textarea`
  width: 80%;
  height: 30vh;
  resize: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(97, 97, 97);
  border-image: initial;
  padding: 0.5rem 0.8rem;
`;

const EnterBtn = styled.button`
  color : white;
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