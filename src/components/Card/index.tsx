import React, { useState } from 'react';

import './styles.scss';

const Card: React.FC = () => {
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
          <img src="https://picsum.photos/500/300/?image=10" />
          {isEditIconShown ? (
            <span
              onClick={handleEditMenuToggle}
              onKeyDown={handleEditMenuToggle}
              role="button"
              tabIndex={0}
            >
              Edit
            </span>
          ) : (
            ''
          )}
          {isEditMenuShown ? renderCardMenu() : ''}
        </div>
        <div className="card_content">
          <div className="card_title">
            <h2>Card Grid Layout</h2>
          </div>
          <div className="card_text">
            <div className="budget">$ 5000 / Month</div>
            <div className="status">Saved</div>
          </div>
          <div className="progress-bar" />
        </div>
        <div className="card-footer">Footer</div>
      </div>
    </div>
  );
};

export default Card;
