
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/dashboard/12">Accueil</NavLink>
      <NavLink to="/profile">Profil</NavLink>
      <NavLink to="/settings">Réglages</NavLink>
      <NavLink to="/community">Communauté</NavLink>
    </nav>
  );
};

export default Navbar;
