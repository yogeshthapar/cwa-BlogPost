import React from 'react';

import Logo from '../Svg/Logo.js';
import './Header.css';

/**
 * Header component.
 */
const Header = () => (
  <header className="bt--wrapper-header">
    <div className="bt--header-logo">
      <Logo />
    </div>
  </header>
);

export default Header;
