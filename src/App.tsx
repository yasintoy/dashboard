import React, { useState } from 'react';

import Constants from './constants';
import './styles/theme.scss';
import './App.scss';

function App() {
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    const newTheme: string =
      theme === Constants.LIGHT_MODE
        ? Constants.DARK_MODE
        : Constants.LIGHT_MODE;
    setTheme(newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
