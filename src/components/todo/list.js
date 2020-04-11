import React from 'react';
import styled from 'styled-components';

import TodoItem from './item';

function TodoList(props) {
  const { todos, onComplete } = props;

  return (
    <Wrapper>
      {todos
        .sort((a, b) => a.time.localeCompare(b.time))
        .map((item, index) => (
          <TodoItem
            key={JSON.stringify(item)}
            {...item}
            onComplete={onComplete(index)}
          />
        ))}
    </Wrapper>
  );
}

export default React.memo(
  TodoList,
  (prev, next) => prev.todos.length === next.todos.length
);

const Wrapper = styled.div`
  font-size: 18px;
  flex: 1;
`;
