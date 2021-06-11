import React, { useState } from 'react';
import {Separator} from "../templates/separator";
import logo from "../images/logo.png";

export const AboutSection = (props) => {
    const backgroundStyle = {
        backgroundColor: '#111',
        height: '50vh',
        margin: '0px, 20px'
    }

    return (
    <>
    <div style={backgroundStyle}>
        <Separator header="About Bad Bug Studios"/>
        <img src={logo} className='imgDesktop'/>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu est nisl. In finibus massa sit amet congue suscipit. Etiam nunc quam, consequat vitae felis eu, mollis ultrices nulla. Nunc mi lectus, fermentum sed scelerisque vitae, mattis in diam. Donec sollicitudin, est sit amet ultrices elementum, nulla justo pulvinar arcu, a fermentum augue mauris et diam. Aliquam placerat orci ut consectetur egestas. Suspendisse lobortis felis quis congue rhoncus. Nullam in rutrum ex. Vestibulum lacus quam, imperdiet eget congue auctor, imperdiet ut enim. Nam pretium purus quis enim luctus rutrum. </p>
        <p> Morbi vel sem accumsan sem porttitor viverra. Donec eget finibus est, eu convallis ante. Etiam nec nulla non erat accumsan dictum. Nunc metus eros, fermentum id augue vitae, accumsan sodales lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis luctus malesuada ipsum. Pellentesque efficitur lobortis justo, sed semper eros feugiat sed. Sed pretium felis in posuere commodo. </p>
    </div>
    </>);
}