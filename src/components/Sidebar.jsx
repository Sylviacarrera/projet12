import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import yogaIcon from '../assets/yoga.png';
import nageIcon from '../assets/nage.png';
import veloIcon from '../assets/velo.png';
import muscuIcon from '../assets/muscu.png';
import '../style/Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-links">
        <Link to="/dashboard"><img src={yogaIcon} alt="Yoga" /></Link>
        <Link to="/profile"><img src={nageIcon} alt="Nage" /></Link>
        <Link to="/settings"><img src={veloIcon} alt="Velo" /></Link>
        <Link to="/community"><img src={muscuIcon} alt="Communauté" /></Link>
      </nav>
      <p className="copyright">Copyright Sportsee 2020</p>
    </div>
  );
};

export default Sidebar;
