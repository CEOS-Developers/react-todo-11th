import React from "react";
import styled from "styled-components";

import TodoItem from "./todo-item";

export default function TodoList({ todos, completeTodo }) {
    return (
        <Wrapper>
            {todos.sort((todo1, todo2) => {
                return todo1.dueDate < todo2.dueDate ? -1 : todo1.dueDate > todo2.dueDate ? 1 : 0;
            }).map((todo) => (todo.isComplete ? null : <TodoItem key={todo.id} {...todo} completeTodo={completeTodo} />))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    font-size: 18px;
    flex: 1 1 0%;
`;
