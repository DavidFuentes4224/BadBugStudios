import React, { useState } from 'react';
import { Affix, Button } from 'antd';


export const NavBar = () => {

  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <>
       <div class="topnav">
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#news">Projects</a>
        <a class="active" href="#home">Home</a>
    </div> 
    </>
  );
};