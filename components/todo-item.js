import React, { useState } from 'react';

import styled from "styled-components";

export default function TodoItem({todo ,onDelete}) {
  return (
    <Wrapper>
      <Row>
        <Todo>{content}</Todo>
        <Date>{date}</Date>
      </Row>
        <DeleteButton onClick={onDelete}> 완료 </DeleteButton>
    </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 1rem 2rem;
  border: 1px, solid, black;
`;

const Todo= styled.p`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`;

const Date= styled.p`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`;

const DeleteButton = styled.button`
  color: white;
  background-color: rgb(97, 97, 97);
  font-size: 1.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
  margin-left: auto;
`;
