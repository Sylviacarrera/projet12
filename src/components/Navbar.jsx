import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/dashboard" activeClassName="active">Accueil</NavLink>
      <NavLink to="/profile" activeClassName="active">Profil</NavLink>
      <NavLink to="/settings" activeClassName="active">Réglages</NavLink>
      <NavLink to="/community" activeClassName="active">Communauté</NavLink>
    </nav>
  );
};

export default Navbar;
