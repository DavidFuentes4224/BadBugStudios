import Unity, { UnityContext } from "react-unity-webgl";
import React, { useState,useEffect } from "react";
export const SkyClimbers = () => {
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
    unityContext.on("loaded", function () {
      setIsLoaded(true);
    });
  }, []);
  const unityContext = new UnityContext({
    loaderUrl: "Build/Sky Climbers 6-13.loader.js",
    dataUrl: "Build/Sky Climbers 6-13.data",
    frameworkUrl: "/Build/Sky Climbers 6-13.framework.js",
    codeUrl: "Build/Sky Climbers 6-13.wasm",
  });
  return (
    <div>
      <p  style={{ visibility: isLoaded ? "hidden" : "visible" }}>Loading {progression * 100} percent...</p>
      <Unity  style={{ visibility: isLoaded ? "visible" : "hidden" }} unityContext={unityContext} style={{ width: "80%", height: "auto" }}/>
    </div>
  );
}