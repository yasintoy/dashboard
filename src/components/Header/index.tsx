import React, { useEffect, useState } from 'react';
import {
  BarsOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Select from 'react-select';

import './styles.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export interface Props {
  isMobile: boolean;
}

const Header: React.FC<Props> = ({ isMobile }) => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  return (
    <nav className="nav">
      <div className="nav-campaigns-select">
        <Select
          defaultValue={selectedCampaign}
          onChange={setSelectedCampaign}
          options={options}
          menuPlacement="auto"
          menuPosition="fixed"
          className="campaigns-select"
        />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BarsOutlined style={{ fontSize: '24px', paddingLeft: '12px' }} />
          <span style={{ paddingLeft: '2px' }}>Pending</span>
        </div>
      </div>
      {!isMobile ? (
        <ul className="nav-links">
          <li className="nav-item">
            <SearchOutlined style={{ fontSize: '24px' }} />
          </li>
          <li className="nav-item">
            <a href="#">Today, Jun 16th</a>
          </li>
          <li className="nav-item">
            <a href="#">1d</a>
          </li>
        </ul>
      ) : (
        ''
      )}
    </nav>
  );
};

export default Header;
