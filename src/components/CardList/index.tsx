import React, { useState, useEffect } from 'react';

import { Card as ICard } from '../../actionTypes/cards';
import Card from '../Card';
import CreateCard from '../CreateCard';
import Loading from '../Loading';

import './styles.scss';

export interface Props {
  cards: ICard[];
  isCardUpdateLoading: boolean;
  handleCardUpdate: (
    cardId: string,
    cardTitle: string,
    newStatus: string
  ) => void;
}

const CardList: React.FC<Props> = ({
  cards,
  isCardUpdateLoading,
  handleCardUpdate,
}) => {
  if (isCardUpdateLoading) {
    return <Loading />;
  }
  return (
    <div className="main">
      <div className="cards">
        {cards.map((card) => (
          <Card
            handleCardUpdate={handleCardUpdate}
            key={card.cardTitle + card.id}
            card={card}
          />
        ))}
        <CreateCard />
      </div>
    </div>
  );
};

export default CardList;
