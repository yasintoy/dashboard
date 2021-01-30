import React from 'react';

import { Card as ICard } from '../../actionTypes/cards';
import Card from '../Card';
import CreateCard from '../CreateCard';

import './styles.scss';

export interface Props {
  cards: ICard[];
}

const CardList: React.FC<Props> = ({ cards }) => {
  return (
    <div className="main">
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        <CreateCard />
      </div>
    </div>
  );
};

export default CardList;
