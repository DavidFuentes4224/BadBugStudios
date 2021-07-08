import React, { } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const titleStyle = {
    float: 'left',
    fontSize: '32px',
    padding: '0px 5%',
    color: 'azure'
  }
  return (
    <>
      <div class="topnav">
        <div style={titleStyle}>BAD BUG STUDIOS</div>
        <Link to="/skyclimbers">Sky Climbers</Link>
        <Link class="active" to="/">Home</Link>
      </div>
    </>
  );
};