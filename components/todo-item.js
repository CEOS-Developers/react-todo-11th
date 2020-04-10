import React from "react";
import styled from "styled-components";

export default function TodoItem(props) {
  const { date, todo } = props;
  return (
    <Wrapper>
      <ItemCard>
        <TodoText>{todo}</TodoText>
        <DataBtn>
          {date}
          <DelectBtn>완료</DelectBtn>
        </DataBtn>
      </ItemCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const ItemCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  padding: 1rem 2rem;
  border: 1px solid black;
`;

const TodoText = styled.p`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`;

const DataBtn = styled.p`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`;

const DelectBtn = styled.button`
  color: white;
  background-color: rgb(97, 97, 97);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
`;
