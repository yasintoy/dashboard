import React from 'react';

import Card from '../Card';
import './styles.scss';

const CardList: React.FC = () => (
  <div className="main">
    <div className="cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default CardList;
