import React from "react";
import styled from "styled-components";

const mainColor = "#616161";

export default function TodoItem(props) {
  const { time, content, setTodos } = props;

  const deleteHandler = () => {
    setTodos((prev) => {
      return prev.filter((item) => item.content !== content);
    });
  };

  return (
    <Wrapper>
      <Row>
        <Label>{content}</Label>
        <Label>
          {time}
          <Button onClick={deleteHandler}>완료</Button>
        </Label>
      </Row>
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
  align-items: flex-start;
  margin-bottom: 3rem;
  padding: 1rem;
  border: solid 1px black;
`;
const Label = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
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
