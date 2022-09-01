/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import './Nav.css';

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigate(-1)}
        className="return"
        style={{ visibility: pathname === '/' ? 'hidden' : 'visible' }}
      >
        <BsArrowLeftShort style={{ color: 'white', fontSize: '20px' }} />
      </div>
      <h1 className="title">Movies</h1>
      <div className="actions" />
    </div>
  );
};

export default Nav;
