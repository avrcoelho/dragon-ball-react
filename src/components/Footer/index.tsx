import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <span>by: </span>
    <a href="https://github.com/avrcoelho" target="_blank">
      André Coelho
    </a>
  </Container>
);

export default Footer;
