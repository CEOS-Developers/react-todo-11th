import React from 'react';
import styled from 'styled-components';

import TodoItem from './item';

export default function TodoList(props) {
  const { todos, setTodos } = props;

  const handleComplete = (index) => () => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Wrapper>
      {todos
        .sort((a, b) => a.time.localeCompare(b.time))
        .map((item, index) => (
          <TodoItem
            key={JSON.stringify(item)}
            {...item}
            onComplete={handleComplete(index)}
          />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 18px;
  flex: 1;
`;
