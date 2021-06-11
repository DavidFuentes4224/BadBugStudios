import Unity, { UnityContext } from "react-unity-webgl";
import React, { useEffect } from "react";
export const SkyClimbers = () => {
  // useEffect(function () {
  //   unityContext.on("canvas", function (canvas) {
  //     canvas.width = '100%';
  //     canvas.height = '50%';
  //   });
  // }, []);
  const unityContext = new UnityContext({
    loaderUrl: "Build/Sky Climbers 6-10.loader.js",
    dataUrl: "Build/Sky Climbers 6-10.data",
    frameworkUrl: "/Build/Sky Climbers 6-10.framework.js",
    codeUrl: "Build/Sky Climbers 6-10.wasm",
  });
    return <Unity unityContext={unityContext} style={{ width: "100%", height: "auto" }}/>;
}