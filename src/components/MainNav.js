import React from 'react';
import { Link } from 'gatsby';

// Custom Hook
import { useMainNavItems } from '../hooks/useMainNavItems';

import { StyledUL } from './styles/StyledMainNav';

import loginImg from '../images/weiben-lock.svg';

const MainNav = () => {
  const menuItems = useMainNavItems();

  return (
    <StyledUL loginImg={loginImg}>
      {menuItems.map(item => (
        <li key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </StyledUL>
  );
};

export default MainNav;
