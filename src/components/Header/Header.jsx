import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return <header>
    <nav>
      <Link to='/'>Produtos</Link>
      <Link to='contato'>Contato</Link>
    </nav>
  </header>;
};

export default Header;
