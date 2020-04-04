import React from 'react';

import { Container, LogoContainer, Logo } from './styles';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => (
  <Container>
    <LogoContainer>
      <Logo src={logo} alt="DragonBall" />
    </LogoContainer>
  </Container>
);

export default Header;
