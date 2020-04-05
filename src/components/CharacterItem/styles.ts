import styled from 'styled-components';

export const Container = styled.li`
  width: 180px;
  height: 210px;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  border: solid 1px #453e50;
  border-radius: 5px;

  &:hover {
    background-color: #26222d;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 85%;
  border-radius: 5px;
  background-color: #26222d;
  object-fit: cover;
  object-position: top;
`;

export const Name = styled.span`
  color: #fff;
  font-size: 14px;
`;
