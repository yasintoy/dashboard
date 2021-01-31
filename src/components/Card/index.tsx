import React, { useState } from 'react';
import Select from 'react-select';

import { Card as ICard } from '../../actionTypes/cards';
import Constants from '../../constants';

import './styles.scss';

export interface Props {
  card: ICard;
  handleCardUpdate: (
    cardId: string,
    cardTitle: string,
    newStatus: string
  ) => void;
}

const Card: React.FC<Props> = ({ card, handleCardUpdate }) => {
  const [isEditIconShown, setIsEditIconShown] = useState(false);
  const [isEditMenuShown, setIsEditMenuShown] = useState(false);

  const handleEditIconToggle = (event: React.MouseEvent) => {
    setIsEditIconShown(!isEditIconShown);
  };

  const handleEditMenuToggle = () => {
    setIsEditMenuShown(!isEditMenuShown);
  };

  const handleStatusChange = (event, changedCard) => {
    // I'd like to create a confirm modal component but dont have enough time :/
    if (window.confirm('Are you sure you wish to change status this card?')) {
      handleCardUpdate(event.value, changedCard.cardTitle, event.label);
    }
  };

  const renderCardMenu = () => (
    <div className="menu-toggle">
      <button type="button">
        <span>Test</span>
      </button>
      <button type="button">Test</button>
      <button type="button">Test</button>
      <button type="button">Test</button>
    </div>
  );

  return (
    <div
      onMouseEnter={handleEditIconToggle}
      onMouseLeave={handleEditIconToggle}
      className="cards_item"
    >
      <div className="card">
        <div className="card_image">
          <img src={`${card.primaryMediaUrl}?random=${card.cardTitle}`} />
          {isEditIconShown ? (
            <span
              onClick={handleEditMenuToggle}
              onKeyDown={handleEditMenuToggle}
              role="button"
              tabIndex={0}
            >
              {/* <EditOutlined color="red" /> */}
              edit
            </span>
          ) : (
            ''
          )}
          {isEditMenuShown ? renderCardMenu() : ''}
        </div>
        <div className="card_content">
          <div className="card_title">
            <h2>{card.cardTitle}</h2>
          </div>
          <div className="card_text">
            <div className="budget">
              {card.listOfPlans[0].price.currencySymbol}{' '}
              {card.listOfPlans[0].price.amount} / Month
            </div>
            <div className="status">
              <Select
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
                defaultValue={{
                  value: card.id,
                  label: card.currentWorkflow,
                }}
                onChange={(e) => handleStatusChange(e, card)}
                options={Constants.WORK_FLOWS[card.currentWorkflow].map(
                  (label) => ({
                    value: card.id,
                    label,
                  })
                )}
                menuPlacement="auto"
                menuPosition="fixed"
              />
            </div>
          </div>
          <div className="progress-bar" />
        </div>
        <div className="card-footer">
          <div>{card.likes}</div>
          <div>{card.shares}</div>
          <div>{card.views}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
