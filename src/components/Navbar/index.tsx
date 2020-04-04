import React from 'react';

import { Container, Menu, Item } from './styles';

type Props = {
  itemActive: string;
  setItemActive: (value: string) => void;
};

const Navbar: React.FC<Props> = ({ itemActive, setItemActive }) => {
  return (
    <Container>
      <Menu>
        <Item
          active={itemActive === 'characters'}
          data-testid="characters"
          onClick={() => setItemActive('characters')}>
          <i className="fa fa-user" />
          <span>Personagens</span>
        </Item>
        <Item
          active={itemActive === 'planets'}
          data-testid="planets"
          onClick={() => setItemActive('planets')}>
          <i className="fa fa-globe" />
          <span>Planetas</span>
        </Item>
      </Menu>
    </Container>
  );
};

export default Navbar;
