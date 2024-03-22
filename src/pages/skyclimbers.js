import Unity, { UnityContext } from "react-unity-webgl";
import React, { useState,useEffect } from "react";
import { Separator } from "../templates/separator";
import iconSpace from '../images/Icon_Space.png';
import iconCtrl from '../images/Icon_Ctrl.png';
import iconR from '../images/Icon_R.png';

const Instruction = (msg,icon) => {
  return (
    <div className={'instruction'}>
      <img src={icon} className={'instructionImg'} alt={"key"}></img>
      {msg}
    </div>
  );
}

export const SkyClimbers = () => {  
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const unityContext = new UnityContext({
    loaderUrl: "Build/Sky Climbers WEBGL.loader.js",
    dataUrl: "Build/Sky Climbers WEBGL.data",
    frameworkUrl: "/Build/Sky Climbers WEBGL.framework.js",
    codeUrl: "Build/Sky Climbers WEBGL.wasm",
  });

  /* eslint-disable */
  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
    unityContext.on("loaded", function () {
      setIsLoaded(true);
    });

    return () => {
      unityContext.on("quitted", function () {
        // var canvas = $("canvas");
        // console.log("quit game",canvas);
        // canvas.remove();
      });
    };
  }, []);
/* eslint-enable */
  return (
    <div style={{height: '100vh'}} className={'backgroundStyle'}>
      <p  style={{ visibility: isLoaded ? "hidden" : "visible", color:'azure' }}>Loading {progression * 100} percent...</p>
      <Unity  style={{ visibility: isLoaded ? "visible" : "hidden" }} unityContext={unityContext}/>
      <div>
        <Separator header="How To Play"/>
        <ul className={'instructions'}>
          <li>{Instruction("Press Space to Jump Forward",iconSpace)} </li>
          <li>{Instruction("Press Ctrl to Turn and Jump",iconCtrl)} </li>
          <li>{Instruction("Press R to Restart",iconR)} </li>
        </ul>
      </div>
    </div>
  );
}