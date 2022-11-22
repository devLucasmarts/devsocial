import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>DevSocial</span>
        </Link>
      </div>
      <div className="right"></div>
    </nav>
  );
};

export default Navbar;
