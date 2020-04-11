import React from 'react';
import styled from 'styled-components';

import { Button, Row, P } from '../atoms';

export default function TodoItem(props) {
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

const Wrapper = styled.div`
  display: flex;
`;

const StyledRow = styled(Row)`
  && {
    padding: 1rem 2rem;
    border: solid 1px black;
  }
`;
