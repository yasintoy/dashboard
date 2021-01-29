import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { getCampaigns } from '../../actionCreators/campaigns';
import { getCards } from '../../actionCreators/cards';
import { CampaignsAction } from '../../actionTypes/campaigns';
import { CardsAction } from '../../actionTypes/cards';
import Header from '../../components/Header';
import CardList from '../../components/CardList';
import Constants from '../../constants';
import './App.scss';

interface Props {
  getCampaigns(): void;
  getCards(): void;
}

const Dashboard: React.FC<Props> = (props) => {
  const [themeState, setThemeState] = useState(true);
  props.getCampaigns();
  props.getCards();

  const handleThemeChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', Constants.DARK_MODE);
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', Constants.LIGHT_MODE);
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === Constants.DARK_MODE)
      return document.body.classList.add('dark-mode');
  }, []);

  return (
    <>
      <Header />
      <CardList />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCampaigns: () => {
    dispatch(getCampaigns());
  },
  getCards: () => {
    dispatch(getCards());
  },
});

export default connect(null, mapDispatchToProps)(Dashboard);
