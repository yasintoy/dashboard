import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import CardList from '../../components/CardList';
import Constants from '../../constants';
import './App.scss';

const Dashboard: React.FC = () => {
  const [themeState, setThemeState] = useState(true);

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

export default Dashboard;
