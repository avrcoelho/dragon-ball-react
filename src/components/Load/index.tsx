import React from 'react';

import { Container } from './styles';

const Load: React.FC = () => (
  <Container data-testid="load">
    <i className="fa fa-spinner fa-pulse"></i>
  </Container>
);

export default Load;
