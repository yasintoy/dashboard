import React, { useState } from 'react';
import Select from 'react-select';

import './styles.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Header: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  return (
    <nav className="nav">
      <div className="nav-campaigns-select">
        <Select
          defaultValue={selectedCampaign}
          onChange={setSelectedCampaign}
          options={options}
        />
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#">Test</a>
        </li>
        <li className="nav-item">
          <a href="#">Test</a>
        </li>
        <li className="nav-item">
          <a href="#">Test</a>
        </li>
        <li className="nav-item">
          <a href="#">Test in</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
