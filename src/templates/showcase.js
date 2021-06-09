import React, { useState } from 'react';

export const ShowCase = (props) => {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        height: '90%',
        width: '100%',
        color: 'white',
        textShadow: '2px 2px #000' 
    }
    return (
        <>
        <div className='showcase' style={{backgroundImage:`url(${props.url})`}}>
            <h1 style={headerStyle}>{props.header}</h1>
        </div>
        {/* <img src={logo1} alt="Logo"/> */}
        </>
    );
}