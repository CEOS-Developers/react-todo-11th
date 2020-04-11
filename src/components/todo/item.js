import React from 'react';
import styled from 'styled-components';

import { Button, Row, P } from '../atoms';

function TodoItem(props) {
  const { time, content } = props;

  return (
    <Wrapper>
      <StyledRow>
        <P>{content}</P>
        <P>
          {time}
          <Button onClick={props.onComplete}>완료</Button>
        </P>
      </StyledRow>
    </Wrapper>
  );
}

export default React.memo(
  TodoItem,
  (prev, next) => prev.time === next.time && prev.content === next.content
);

const Wrapper = styled.div`
  display: flex;
`;

const StyledRow = styled(Row)`
  && {
    padding: 1rem 2rem;
    border: solid 1px black;
  }
`;
