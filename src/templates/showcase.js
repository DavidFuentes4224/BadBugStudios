import React, { } from 'react';

export const ShowCase = (props) => {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        height: '90%',
        width: '100%',
        color: 'azure',
        textShadow: '2px 2px #333' 
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