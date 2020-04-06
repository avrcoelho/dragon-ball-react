import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <span>by: </span>
    <a
      href="https://github.com/avrcoelho"
      target="_blank"
      rel="noopener noreferrer">
      André Coelho
    </a>
  </Container>
);

export default Footer;
