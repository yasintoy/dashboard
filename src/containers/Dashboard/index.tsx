import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { getCampaigns } from '../../actionCreators/campaigns';
import { getCards } from '../../actionCreators/cards';
import { Campaign } from '../../actionTypes/campaigns';
import { Card } from '../../actionTypes/cards';
import Header from '../../components/Header';
import CardList from '../../components/CardList';
import Constants from '../../constants';
import { AppState } from '../../reducers/rootReducer';

import './styles.scss';

interface Props {
  campaigns: Campaign[];
  cards: Card[];
}

const Dashboard: React.FC<Props> = ({ campaigns, cards }) => {
  const [themeState, setThemeState] = useState<string>('light');
  const [width, setWidth] = useState<number>(window.innerWidth);
  const dispatch = useDispatch();
  const isMobile: boolean = width <= 768;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    dispatch(getCampaigns());
    dispatch(getCards());
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleThemeChange = () => {
    if (themeState === 'light') {
      localStorage.setItem('Theme', Constants.DARK_MODE);
      setThemeState('dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', Constants.LIGHT_MODE);
      setThemeState('light');
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('Theme');
    if (localTheme === Constants.DARK_MODE)
      return document.body.classList.add('dark-mode');
  }, []);

  return (
    <div className="container">
      <Header campaigns={campaigns} isMobile={isMobile} />
      <CardList cards={cards} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    campaigns: state.campaigns.campaigns,
    cards: state.cards.cards,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
