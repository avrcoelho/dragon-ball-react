import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #e50d0d;
`;

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 992px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const Logo = styled.img`
  height: 55px;
`;

export const BackButton = styled(Link)`
  color: #000;
  margin-left: 20px;
  text-decoration: none;
  font-weight: bold;

  span {
    font-size: 14px;
  }

  i {
    margin-right: 4px;
  }
`;
