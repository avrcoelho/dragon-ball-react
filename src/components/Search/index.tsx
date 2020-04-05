import React from 'react';

import { Container, Input } from './styles';

type Prop = {
  search: (value: string) => void;
  value: string;
};

const Search: React.FC<Prop> = ({ search, value }) => (
  <Container>
    <Input
      placeholder="Pesquisar"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        search(e.target.value)
      }
    />
  </Container>
);

export default Search;
