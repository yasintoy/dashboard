import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Constants from './constants';
import './App.scss';

const App: React.FC = () => {
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
      <div className="app">
        <header className="app-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <button type="button" onClick={handleThemeChange}>
            change
          </button>
        </header>
      </div>
    </>
  );
};

export default App;
