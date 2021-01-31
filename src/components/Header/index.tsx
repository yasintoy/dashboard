import React, { useState } from 'react';
import {
  BarsOutlined,
  SearchOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

import Select from 'react-select';

import { Campaign } from '../../actionTypes/campaigns';

import './styles.scss';

interface ICampaignSelect {
  value: string;
  label: string;
}

export interface Props {
  isMobile: boolean;
  isCampaignLoading: boolean;
  campaigns: Array<Campaign>;
  handleCampaignChange: (campaign: ICampaignSelect) => void;
}

const Header: React.FC<Props> = ({
  isMobile,
  campaigns,
  handleCampaignChange,
  isCampaignLoading,
}) => {
  const [selectedCampaign, setSelectedCampaign] = useState<object>({
    value: '',
    label: 'All Campaigns',
  });

  const handleCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    handleCampaignChange(campaign);
  };

  return (
    <nav className="nav">
      <div className="nav_campaigns_select">
        <Select
          isLoading={isCampaignLoading}
          defaultValue={selectedCampaign}
          onChange={handleCampaign}
          options={campaigns.map((campaign) => ({
            value: campaign.id,
            label: campaign.campaignName,
          }))}
          menuPlacement="auto"
          menuPosition="fixed"
          className="campaigns_select"
        />

        <div className="nav_campaigns_select_pending">
          <BarsOutlined style={{ fontSize: '24px', paddingLeft: '12px' }} />
          <span>Pending</span>
        </div>
      </div>
      {!isMobile ? (
        <ul className="nav_links">
          <li className="nav-item">
            <SearchOutlined style={{ fontSize: '24px' }} />
          </li>
          <li className="nav_item">
            <a href="#">
              {'<'} <CalendarOutlined /> Today, Jun {new Date().getDate()} {'>'}
            </a>
          </li>
          <li className="nav_item">
            <a href="#">1d</a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Header;
