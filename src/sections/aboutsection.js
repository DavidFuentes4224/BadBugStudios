import React, {  } from 'react';
import { Separator } from "../templates/separator";
import me from "../images/Me.jpg";

export const AboutSection = () => {
    return (
        <>
            <div className='backgroundStyle about'>
                <Separator header="About David" />
                <img src={me} className='imgDesktop' alt={'profile picture'} />
                <p className='aboutInfo'> I am a software engineer who is passionate about gaming and learning. I am a strong advocate of personal growth and hard work. I am both a full-time employee as well a full-time student. In my spare time, I express myself creatively by making games using Unreal Engine and Unity. When I'm not in front of a screen, I enjoy playing music and retro photography. </p>
                <p className='aboutInfo'>Please keep in mind that is website in under construction! Updates should be coming soon . . .</p>
            </div>
        </>
        );
}