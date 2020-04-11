import React, { useState } from 'react';
import styled from 'styled-components';

import TodoInput from '../src/components/todo/input';
import TodoList from '../src/components/todo/list';

import { BACKGROND_COLOR } from '../src/components/atoms/colors';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleComplete = (index) => () => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Wrapper>
      <Title>리액트-투두</Title>
      <ContentWrapper>
        <TodoInput onSubmit={handleAdd} />
        <div style={{ flex: 1 }} />
        <TodoList todos={todos} onComplete={handleComplete} />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${BACKGROND_COLOR};
  padding: 4rem 5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: 600;
`;
