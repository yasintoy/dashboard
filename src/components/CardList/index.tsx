import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';

import { Card as ICard } from '../../actionTypes/cards';
import Card from '../Card';
import CreateCard from '../CreateCard';
import Loading from '../Loading';

import './styles.scss';

export interface Props {
  isMobile: boolean;
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
  isMobile,
}) => {
  if (isCardUpdateLoading) {
    return <Loading />;
  }
  const renderHeader = () => (
    <div className="header">
      <div className="header_search">
        <input type="text" placeholder="search" />
      </div>
      <div className="header_filter">
        <div className="header_filter_date">
          <a href="#">
            {'<'} <CalendarOutlined /> Today, Jun {new Date().getDate()} {'>'}
          </a>
        </div>
        <div className="header_filter_day">
          <a href="#">1d</a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="main">
      <div className="cards">
        {isMobile ? renderHeader() : null}

        {cards.map((card) => (
          <Card
            handleCardUpdate={handleCardUpdate}
            key={card.cardTitle}
            id={card.cardTitle}
            card={card}
          />
        ))}
        <CreateCard />
      </div>
    </div>
  );
};

export default CardList;
