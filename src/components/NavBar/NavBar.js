import React from 'react';
import { MdHome, MdInfo } from 'react-icons/md';
import { Nav, Link } from './styles';

const fontSize = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={fontSize} />
      </Link>
      <Link to="/information">
        <MdInfo size={fontSize} />
      </Link>
    </Nav>
  )
}