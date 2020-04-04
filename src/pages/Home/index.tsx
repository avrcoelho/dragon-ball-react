import React, { useState } from 'react';

import Navbar from '../../components/Navbar';

const Home: React.FC = () => {
  const [itemActive, setItemActive] = useState('characters');

  return (
    <Navbar
      itemActive={itemActive}
      setItemActive={(value: string) => setItemActive(value)}
    />
  );
};

export default Home;
