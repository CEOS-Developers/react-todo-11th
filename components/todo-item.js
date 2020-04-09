import React from "react";
import styled from "styled-components";

function TodoItem({ id, content, dueDate, completeTodo }) {
  return <Wrapper>
      <p style={{"fontSize":"1.5rem","display":"flex","flexDirection":"column","padding":"0px","margin":"0px"}}>{content}</p>
      <p style={{"fontSize":"1.5rem","display":"flex","flexDirection":"column","padding":"0px","margin":"0px"}}>{dueDate}
        <button style={{"color":"white","backgroundColor":"rgb(97, 97, 97)","fontSize":"1.5rem","outline":"none","borderWidth":"initial","borderStyle":"none","borderColor":"initial","borderImage":"initial","padding":"0.5rem 1rem","borderRadius":"0.3rem"}} onClick={(() => { completeTodo(id) })}>
          완료
        </button>
      </p>
  </Wrapper>;
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;
    padding: 1rem 2rem;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-image: initial;
`;

const areEqual = (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
}

export default React.memo(TodoItem, areEqual);