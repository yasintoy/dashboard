import React, { useState } from 'react';
import EditOutlined from '@ant-design/icons';
import Select from 'react-select';

import { Card as ICard } from '../../actionTypes/cards';

import './styles.scss';
import Constants from '../../constants';

export interface Props {
  card: ICard;
}

const Card: React.FC<Props> = ({ card }) => {
  const [isEditIconShown, setIsEditIconShown] = useState(false);
  const [isEditMenuShown, setIsEditMenuShown] = useState(false);

  const handleEditIconToggle = (event: React.MouseEvent) => {
    setIsEditIconShown(!isEditIconShown);
  };

  const handleEditMenuToggle = () => {
    setIsEditMenuShown(!isEditMenuShown);
  };

  const renderCardMenu = () => (
    <div className="menu-toggle">
      <button type="button">Test</button>
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
          <img src={card.primaryMediaUrl} />
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
            <h2>{card.cardDescription}</h2>
          </div>
          <div className="card_text">
            <div className="budget">
              {card.listOfPlans[0].price.currencySymbol}{' '}
              {card.listOfPlans[0].price.amount} / Month
            </div>
            <div className="status">
              <Select
                defaultValue={{
                  value: card.id,
                  label: card.currentWorkflow,
                }}
                onChange={() => {}}
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
        <div className="card-footer">Footer</div>
      </div>
    </div>
  );
};

export default Card;
