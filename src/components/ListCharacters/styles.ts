import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const List = styled.ul`
  width: 100%;
  max-width: 600px;
  list-style: none;
  cursor: pointer;

  &:hover {
    background-color: #26222d;
  }
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: #26222d;
  object-fit: cover;
  object-position: center;
`;

export const NameContainer = styled.div`
  height: 80px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: solid 1px #26222d;
`;

export const Name = styled.span`
  color: #fff;
  font-size: 14px;
`;
