import React, { useState } from 'react';
import { Carousel } from 'antd';
import {ShowCase} from "./templates/showcase"
import logo1 from './images/background1.png'


function onChange(a, b, c) {
    console.log(a, b, c);
  }

export const ShowCaseHouse = () => {
    const contentStyle = {
        height: '50vh',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
      };
    return (
    <>
    <Carousel  afterChange={onChange}>   
    <div>
      <div style={contentStyle}><ShowCase header={"Sky Climbers"} url={logo1}/></div>
    </div>
    <div>
      <div style={contentStyle}><ShowCase header={"VR Project"}/></div>
    </div>
    <div>
      <div style={contentStyle}><ShowCase header={"Another Project"}/></div>
    </div>
  </Carousel>
    </>);
}