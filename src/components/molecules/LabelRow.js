import React from 'react';
import styled from 'styled-components';

import { Row, P } from '../atoms';

export default function LabelRow({ label, children }) {
  return (
    <Row>
      <P>{label}</P>
      {children}
    </Row>
  );
}
