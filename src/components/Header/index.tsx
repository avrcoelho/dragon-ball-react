import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, LogoContainer, Logo, BackButton } from './styles';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  const { planetName } = useParams();

  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} alt="DragonBall" />
        {planetName && (
          <BackButton to="/">
            <i className="fa fa-arrow-left"></i>
            <span>Voltar</span>
          </BackButton>
        )}
      </LogoContainer>
    </Container>
  );
};
export default Header;
