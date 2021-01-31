import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import DarkModeToggle from 'react-dark-mode-toggle';
import { LoadingOutlined } from '@ant-design/icons';

import { getCampaigns } from '../../actionCreators/campaigns';
import { getCards, updateCard } from '../../actionCreators/cards';
import { Campaign, GET_CAMPAIGNS } from '../../actionTypes/campaigns';
import { Card, GET_CARDS, UPDATE_CARD } from '../../actionTypes/cards';
import Header from '../../components/Header';
import CardList from '../../components/CardList';
import Loading from '../../components/Loading';
import Constants from '../../constants';
import { AppState } from '../../reducers/rootReducer';

import './styles.scss';

interface Props {
  campaigns: Campaign[];
  cards: Card[];
  isCampaignLoading: boolean;
  isCardUpdateLoading: boolean;
  isCardsLoading: boolean;
}

interface ICampaignSelect {
  value: string;
  label: string;
}

const Dashboard: React.FC<Props> = ({
  campaigns,
  cards,
  isCampaignLoading,
  isCardsLoading,
  isCardUpdateLoading,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const dispatch = useDispatch();
  const isMobile: boolean = width <= 768;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const handleCampaignChange = (selectedCampaign: ICampaignSelect) => {
    dispatch(getCards(selectedCampaign.value));
  };

  useEffect(() => {
    dispatch(getCampaigns());
    dispatch(getCards());
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      localStorage.setItem('Theme', Constants.DARK_MODE);
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', Constants.LIGHT_MODE);
      document.body.classList.remove('dark-mode');
    }
  };

  const handleCardUpdate = (cardId, cardTitle, newStatus) => {
    dispatch(updateCard(cardId, cardTitle, newStatus));
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('Theme');
    if (localTheme === Constants.DARK_MODE)
      return document.body.classList.add('dark-mode');
  }, []);

  return (
    <div className="container">
      <div className="dark-mode-toggle">
        <DarkModeToggle
          onChange={handleThemeChange}
          checked={isDarkMode}
          size={80}
        />
      </div>
      <Header
        handleCampaignChange={handleCampaignChange}
        isCampaignLoading={isCampaignLoading}
        campaigns={campaigns}
        isMobile={isMobile}
      />
      {isCardsLoading ? (
        <Loading />
      ) : (
        <CardList
          handleCardUpdate={handleCardUpdate}
          isCardUpdateLoading={isCardUpdateLoading}
          cards={cards}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    campaigns: state.campaigns.campaigns,
    isCampaignLoading: state.isLoading[GET_CAMPAIGNS],
    cards: state.cards.cards,
    isCardsLoading: state.isLoading[GET_CARDS],
    isCardUpdateLoading: state.isLoading[UPDATE_CARD],
  };
};

export default connect(mapStateToProps, null)(Dashboard);
