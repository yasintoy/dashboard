import React, { useEffect, useState } from 'react';
import {
  BarsOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Select from 'react-select';

import { Campaign } from '../../actionTypes/campaigns';

import './styles.scss';

export interface Props {
  isMobile: boolean;
  campaigns: Array<Campaign>;
}

const Header: React.FC<Props> = ({ isMobile, campaigns }) => {
  const [selectedCampaign, setSelectedCampaign] = useState<object>({
    value: null,
    label: 'All Campaigns',
  });

  return (
    <nav className="nav">
      <div className="nav-campaigns-select">
        <Select
          defaultValue={selectedCampaign}
          onChange={setSelectedCampaign}
          options={campaigns.map((campaign) => ({
            value: campaign.id,
            label: campaign.campaignName,
          }))}
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
