import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.li`
  width: 180px;
  height: 210px;
  margin: 10px;
  border-radius: 4px;
  display: inline-flex;
  border: solid 1px #453e50;
  border-radius: 5px;

  &:hover {
    background-color: #26222d;
  }
`;

export const Redirect = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 10px 10px 0;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 85%;
  border-radius: 5px;
  background-color: #26222d;
  object-fit: cover;
  object-position: top;
`;

export const NameContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.span`
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
