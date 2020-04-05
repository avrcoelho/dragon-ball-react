import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 30px;
  background-color: #e50d0d;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 14px;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #000;

    &:hover {
      text-decoration: underline;
    }
  }
`;
