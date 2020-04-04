import styled from 'styled-components';

type Props = {
  active?: boolean;
};

export const Container = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 150px;
  color: ${(props: Props) => (props.active ? '#000' : '#e50d0d')};
  background-color: ${(props: Props) =>
    props.active ? '#e50d0d' : 'transparent'};
  font-weight: bold;
  border: #e50d0d solid 2px;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;

  i {
    margin-right: 6px;
  }
`;
