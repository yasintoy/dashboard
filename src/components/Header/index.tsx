import React from 'react';

import './styles.scss';

const Header: React.FC = () => (
  <nav className="nav">
    <a className="logo">All Campaigns</a>
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

export default Header;
