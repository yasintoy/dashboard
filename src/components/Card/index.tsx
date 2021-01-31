import React, { useState } from 'react';
import {
  LikeOutlined,
  TeamOutlined,
  EyeOutlined,
  EditOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import Select from 'react-select';

import { Card as ICard } from '../../actionTypes/cards';
import Constants from '../../constants';

import './styles.scss';

export interface Props {
  id: string;
  card: ICard;
  handleCardUpdate: (
    cardId: string,
    cardTitle: string,
    newStatus: string
  ) => void;
}

const Card: React.FC<Props> = ({ card, handleCardUpdate, id }) => {
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
    <div className="menu_toggle">
      <button type="button">
        <EditOutlined />
        <span>Edit</span>
      </button>
      <button type="button">
        <CheckCircleOutlined />
        <span>Publis</span>
      </button>
      <button type="button">
        <ShareAltOutlined />
        <span>Share</span>
      </button>
      <button type="button">
        <DeleteOutlined />
        <span>Delete</span>
      </button>
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
            <div
              className="card_image_icon"
              onClick={handleEditMenuToggle}
              onKeyDown={handleEditMenuToggle}
              role="button"
              tabIndex={0}
            >
              <EditOutlined twoToneColor="#eb2f96" />
            </div>
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
          <div className="progress_bar" />
        </div>
        <div className="card_footer">
          <div>
            <LikeOutlined />
            <span>{card.likes}</span>
          </div>
          <div>
            <TeamOutlined />
            <span>{card.shares}</span>
          </div>
          <div>
            <EyeOutlined />
            <span>{card.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
