import Unity, { UnityContext } from "react-unity-webgl";
import React, { useState, useEffect, useRef } from "react";
import iconSpace from '../images/Icon_Space.png';
import iconCtrl  from '../images/Icon_Ctrl.png';
import iconR     from '../images/Icon_R.png';

const Instruction = (msg, icon) => (
  <div className="instruction">
    <img src={icon} className="instructionImg" alt="key" />
    {msg}
  </div>
);

const SkyClimbers = () => {
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded]       = useState(false);

  const unityContext = useRef(new UnityContext({
    loaderUrl:    "Build/Sky Climbers WEBGL.loader.js",
    dataUrl:      "Build/Sky Climbers WEBGL.data",
    frameworkUrl: "/Build/Sky Climbers WEBGL.framework.js",
    codeUrl:      "Build/Sky Climbers WEBGL.wasm",
  })).current;

  /* eslint-disable */
  useEffect(() => {
    unityContext.on("progress", (p) => setProgression(p));
    unityContext.on("loaded",   ()  => setIsLoaded(true));
    return () => {
      unityContext.on("quitted", () => {});
    };
  }, []);
  /* eslint-enable */

  return (
    <div className="sky-climbers-page">
      <div className="sky-climbers-inner">
        <div className="section-header-group">
          <p className="section-label">Bad Bug Studios</p>
          <h2 className="section-title">Sky Climbers</h2>
          <div className="section-divider"></div>
        </div>
        <p style={{ visibility: isLoaded ? 'hidden' : 'visible' }}>
          Loading {Math.round(progression * 100)}%…
        </p>
        <div style={{ width: '100%', maxWidth: '1920px', aspectRatio: '16/9', margin: '0 auto', position: 'relative' }}>
          <Unity
            style={{
              visibility: isLoaded ? 'visible' : 'hidden',
              width: '100%', height: '100%',
              position: 'absolute', top: 0, left: 0,
            }}
            width={1920}
            height={1080}
            unityContext={unityContext}
          />
        </div>
        <div className="section-header-group" style={{ marginTop: '32px', marginBottom: '20px' }}>
            <p className="section-label">Controls</p>
            <h2 className="section-title">How To Play</h2>
            <div className="section-divider"></div>
          </div>
          <ul className="instructions">
            <li>{Instruction("Press Space to Jump Forward",   iconSpace)}</li>
            <li>{Instruction("Press Ctrl to Turn and Jump",   iconCtrl)}</li>
            <li>{Instruction("Press R to Restart",            iconR)}</li>
          </ul>
      </div>
    </div>
  );
};

export { SkyClimbers };
export default SkyClimbers;